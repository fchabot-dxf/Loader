"""
Fred App loader — local dev server.

Scans the parent APPS/ folder for app folders with an index.html entry,
merges them into a persistent on-disk apps.json (additive, never removes
entries), serves the loader at /, and serves each app under /apps/<id>/.

Run:
    python serve.py
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
APPS_DIR = LOADER_DIR.parent
SELF_NAME = LOADER_DIR.name
REGISTRY = LOADER_DIR / "apps.json"

IGNORE = {
    SELF_NAME, ".claude", ".git", ".vscode", "VSCODE",
    "Sync script", "fusion360-mcp-bridge", "UniversalAddin",
    "FusionBatchExportCombined", "DDCS-Expert-skill",
}

ENTRY_CANDIDATES = [
    "index.html", "dist/index.html", "src/index.html", "public/index.html",
]


def humanize(name):
    s = re.sub(r"[-_]+", " ", name).strip()
    s = re.sub(r"\b(web addin|addin|project|generator|gen)\b", "", s, flags=re.I)
    s = re.sub(r"\s+", " ", s).strip()
    return s.title() if s else name


def find_entry(folder):
    for cand in ENTRY_CANDIDATES:
        if (folder / cand).is_file():
            return cand
    htmls = list(folder.glob("*.html"))
    if len(htmls) == 1:
        return htmls[0].name
    return None


def load_registry():
    if not REGISTRY.is_file():
        return {"apps": []}
    try:
        return json.loads(REGISTRY.read_text(encoding="utf-8"))
    except Exception as e:
        print(f"[serve] could not parse apps.json: {e}", file=sys.stderr)
        return {"apps": []}


def save_registry(doc):
    text = json.dumps(doc, indent=2, ensure_ascii=False) + "\n"
    try:
        if REGISTRY.is_file() and REGISTRY.read_text(encoding="utf-8") == text:
            return
        REGISTRY.write_text(text, encoding="utf-8")
    except Exception as e:
        print(f"[serve] could not write apps.json: {e}", file=sys.stderr)


def scan_disk():
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
    for f in sorted(APPS_DIR.glob("*.html")):
        found[f.stem] = {
            "folder": "",
            "entry": f.name,
            "localUrl": f"/apps/{urllib.parse.quote(f.name)}",
            "loose": True,
        }
    return found


def refresh_registry():
    doc = load_registry()
    apps = doc.get("apps", [])
    if not isinstance(apps, list):
        apps = []
    on_disk = scan_disk()
    by_id = {a.get("id") or a.get("name"): a for a in apps if (a.get("id") or a.get("name"))}

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

    for aid, disk in on_disk.items():
        if aid in by_id:
            continue
        new = {
            "id": aid,
            "name": humanize(aid),
            "icon": "*",
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


def view_for_client(doc):
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
        if self.path == "/apps.json" or self.path.startswith("/apps.json?"):
            doc = refresh_registry()
            payload = json.dumps(view_for_client(doc), indent=2).encode("utf-8")
            self._send_json(payload)
            return
        if self.path.startswith("/apps/"):
            rel = urllib.parse.unquote(self.path[len("/apps/"):].split("?", 1)[0])
            target = (APPS_DIR / rel).resolve()
            try:
                target.relative_to(APPS_DIR)
            except ValueError:
                self.send_error(403, "Out of bounds"); return
            if target.is_dir():
                target = target / "index.html"
            if not target.is_file():
                self.send_error(404, f"Not found: {rel}"); return
            self._serve_file(target); return
        if self.path == "/" or self.path == "":
            self._serve_file(LOADER_DIR / "index.html"); return
        rel = urllib.parse.unquote(self.path.lstrip("/").split("?", 1)[0])
        target = (LOADER_DIR / rel).resolve()
        try:
            target.relative_to(LOADER_DIR)
        except ValueError:
            self.send_error(403, "Out of bounds"); return
        if target.is_file():
            self._serve_file(target); return
        self.send_error(404, f"Not found: {self.path}")

    def do_POST(self):
        if self.path == "/apps.json":
            length = int(self.headers.get("Content-Length", "0") or "0")
            try:
                payload = json.loads(self.rfile.read(length).decode("utf-8"))
            except Exception as e:
                self.send_error(400, f"Bad JSON: {e}"); return
            if not isinstance(payload, dict) or not isinstance(payload.get("apps"), list):
                self.send_error(400, "Expected { apps: [...] }"); return
            cleaned = []
            for a in payload["apps"]:
                if not isinstance(a, dict):
                    continue
                e = dict(a)
                e.pop("localUrl", None); e.pop("local", None); e.pop("remoteUrl", None)
                cleaned.append(e)
            doc = load_registry()
            doc["apps"] = cleaned
            save_registry(doc)
            doc = refresh_registry()
            self._send_json(json.dumps(view_for_client(doc), indent=2).encode("utf-8"))
            return
        self.send_error(404)

    def _send_json(self, payload, status=200):
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def _serve_file(self, path):
        ctype = self.guess_type(str(path))
        data = path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(data)

    def log_message(self, fmt, *args):
        sys.stdout.write("[serve] " + fmt % args + "\n")


def main():
    os.chdir(LOADER_DIR)
    doc = refresh_registry()
    n_total = len(doc.get("apps", []))
    n_local = sum(1 for a in doc.get("apps", []) if a.get("local"))

    srv = None
    last_err = None
    chosen_port = None
    for port in range(PORT, PORT + 20):
        try:
            srv = socketserver.ThreadingTCPServer(("127.0.0.1", port), Handler)
            chosen_port = port
            break
        except OSError as e:
            last_err = e
            continue
    if srv is None:
        print(f"Could not bind any port {PORT}-{PORT+19}: {last_err}", file=sys.stderr)
        sys.exit(1)

    url = f"http://localhost:{chosen_port}/"
    with srv:
        srv.allow_reuse_address = True
        print(f"Fred App loader  ->  {url}")
        print(f"  apps from:     {APPS_DIR}")
        print(f"  registry:      {n_total} total, {n_local} present on this PC")
        if chosen_port != PORT:
            print(f"  (port {PORT} was in use; using {chosen_port})")
        print("Ctrl-C to stop.")
        try:
            srv.serve_forever()
        except KeyboardInterrupt:
            print("\nbye")


if __name__ == "__main__":
    main()
