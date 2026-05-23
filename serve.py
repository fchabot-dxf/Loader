"""
Fred App loader — local dev server.

Scans the parent APPS/ folder for app folders (anything with an index.html-ish
entry point), merges them into a persistent on-disk apps.json, and serves the
loader at /. The registry is additive: once an app has been seen on any PC,
it stays in apps.json. Folders missing on this PC just lose their `localUrl`
on this PC's view — they keep their deployed `url` and stay visible
everywhere else.

Run:
    python serve.py
    # then open http://localhost:8765/
"""

import http.server
import json
import os
import re
import socketserver
import sys
import urllib.parse
from pathlib import Path

PORT = 8765
LOADER_DIR = Path(__file__).resolve().parent
APPS_DIR = LOADER_DIR.parent  # the APPS/ folder
SELF_NAME = LOADER_DIR.name   # "loader" — exclude from discovery
REGISTRY = LOADER_DIR / "apps.json"

# Folder names to ignore even if they look like apps.
IGNORE = {
    SELF_NAME,
    ".claude", ".git", ".vscode", "VSCODE",
    "Sync script", "fusion360-mcp-bridge", "UniversalAddin",
    "FusionBatchExportCombined", "DDCS-Expert-skill",
}

# Candidate entry points within an app folder, in priority order.
ENTRY_CANDIDATES = [
    "index.html",
    "dist/index.html",
    "src/index.html",
    "public/index.html",
]


def humanize(name: str) -> str:
    """Turn 'b-spline-generator-web-addin' into 'B Spline Generator'."""
    s = re.sub(r"[-_]+", " ", name).strip()
    s = re.sub(r"\b(web addin|addin|project|generator|gen)\b", "", s, flags=re.I)
    s = re.sub(r"\s+", " ", s).strip()
    return s.title() if s else name


def find_entry(folder: Path) -> str | None:
    """Return a relative entry-point path for a folder, or None."""
    for cand in ENTRY_CANDIDATES:
        if (folder / cand).is_file():
            return cand
    htmls = list(folder.glob("*.html"))
    if len(htmls) == 1:
        return htmls[0].name
    return None


def load_registry() -> dict:
    """Read apps.json from disk. Returns the full document."""
    if not REGISTRY.is_file():
        return {"_comment": "Persistent app registry — additive across PCs.", "apps": []}
    try:
        return json.loads(REGISTRY.read_text(encoding="utf-8"))
    except Exception as e:
        print(f"[serve] could not parse apps.json: {e}", file=sys.stderr)
        return {"apps": []}


def save_registry(doc: dict) -> None:
    """Write apps.json back to disk if its content has changed."""
    text = json.dumps(doc, indent=2, ensure_ascii=False) + "\n"
    try:
        if REGISTRY.is_file() and REGISTRY.read_text(encoding="utf-8") == text:
            return
        REGISTRY.write_text(text, encoding="utf-8")
    except Exception as e:
        print(f"[serve] could not write apps.json: {e}", file=sys.stderr)


def scan_disk() -> dict[str, dict]:
    """Return {id: {entry info}} for every app folder currently on disk."""
    found = {}
    for child in sorted(APPS_DIR.iterdir()):
        if not child.is_dir() or child.name in IGNORE or child.name.startswith("."):
            continue
        entry = find_entry(child)
        if not entry:
            continue
        found[child.name] = {
            "folder": child.name,
            "entry": entry,
            "localUrl": f"/apps/{urllib.parse.quote(child.name)}/{entry}",
        }
    # Loose .html files in APPS/.
    for f in sorted(APPS_DIR.glob("*.html")):
        found[f.stem] = {
            "folder": "",
            "entry": f.name,
            "localUrl": f"/apps/{urllib.parse.quote(f.name)}",
            "loose": True,
        }
    return found


def refresh_registry() -> dict:
    """Merge current disk state into apps.json. Additive: never remove.

    For each known entry:  set/refresh localUrl if folder is on this PC, else clear it.
    For each disk folder not in the registry: append a new entry.
    Writes apps.json back to disk if anything changed.
    """
    doc = load_registry()
    apps = doc.get("apps", [])
    if not isinstance(apps, list):
        apps = []

    on_disk = scan_disk()

    # Index existing entries by id (fall back to name).
    by_id = {}
    for a in apps:
        aid = a.get("id") or a.get("name")
        if aid:
            by_id[aid] = a

    # Refresh existing entries.
    for aid, entry in by_id.items():
        disk = on_disk.get(aid)
        if disk:
            entry["local"] = True
            entry["localUrl"] = disk["localUrl"]
            entry.setdefault("folder", disk["folder"])
            entry.setdefault("entry", disk["entry"])
        else:
            entry["local"] = False
            entry.pop("localUrl", None)

    # Add newly-discovered entries.
    for aid, disk in on_disk.items():
        if aid in by_id:
            continue
        new = {
            "id": aid,
            "name": humanize(aid),
            "icon": "•",
            "group": "apps",
            "url": "",
            "localUrl": disk["localUrl"],
            "folder": disk["folder"],
            "entry": disk["entry"],
            "local": True,
        }
        if disk.get("loose"):
            new["loose"] = True
        apps.append(new)
        by_id[aid] = new
        print(f"[serve] registered new app: {aid}")

    doc["apps"] = apps
    save_registry(doc)
    return doc


def view_for_client(doc: dict) -> dict:
    """Pick the URL the loader should use for each entry: localUrl if set, else url.
    Hidden entries are dropped from the client view."""
    out = []
    for a in doc.get("apps", []):
        if a.get("hidden"):
            continue
        view = dict(a)
        view["url"] = a.get("localUrl") or a.get("url") or ""
        if "localUrl" in a and a.get("url"):
            view["remoteUrl"] = a["url"]
        out.append(view)
    return {"apps": out}


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # /apps.json — fresh scan + view for the client
        if self.path == "/apps.json" or self.path.startswith("/apps.json?"):
            doc = refresh_registry()
            payload = json.dumps(view_for_client(doc), indent=2).encode("utf-8")
            self._send_json(payload)
            return

        # /apps/<folder>/...  — serve from APPS_DIR
        if self.path.startswith("/apps/"):
            rel = urllib.parse.unquote(self.path[len("/apps/"):].split("?", 1)[0])
            target = (APPS_DIR / rel).resolve()
            try:
                target.relative_to(APPS_DIR)
            except ValueError:
                self.send_error(403, "Out of bounds")
                return
            if target.is_dir():
                target = target / "index.html"
            if not target.is_file():
                self.send_error(404, f"Not found: {rel}")
                return
            self._serve_file(target)
            return

        # /  → loader index.html
        if self.path == "/" or self.path == "":
            self._serve_file(LOADER_DIR / "index.html")
            return

        # Anything else → serve from l