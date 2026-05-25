"""
Fred App loader — Cloudflare Pages deploy.

Wraps `wrangler pages deploy` so you can ship the loader the same way you
run it locally: one command, no flags to remember.

Usage:
    python deployCLOUDFLARE.py

What it does:
    1. Sanity-checks that wrangler.toml exists next to this script.
    2. Stages only the runtime files into ./_pages_build/ (so serve.py,
       README.md, the superseded loader.js/loader2.js, .git, etc. never
       get uploaded).
    3. Finds wrangler (global install, or falls back to `npx wrangler`).
    4. Confirms you're logged into Cloudflare (`wrangler whoami`); if not,
       runs `wrangler login` first.
    5. Runs `wrangler pages deploy ./_pages_build --project-name=loader
       --branch=main --commit-dirty=true`, streaming output.
    6. Prints the live URL on success.
    7. Queries `wrangler pages project list --json` and adds any new Pages
       projects to apps.json as placeholder entries (icon "?", group "apps").
       Open Setup in the loader to assign proper groups and icons afterward.

First-time setup (if wrangler is missing):
    npm install -g wrangler
    # or just let this script fall back to npx (slower but no install)
"""

import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

# Force stdout/stderr to UTF-8 so wrangler's emoji output doesn't crash
# Windows' default cp1252 console encoding.
for stream in (sys.stdout, sys.stderr):
    try:
        stream.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

HERE = Path(__file__).resolve().parent
WRANGLER_CFG = HERE / "wrangler.toml"
STAGE = HERE / "_pages_build"
PROJECT_NAME = "apploader"
BRANCH = "main"

# Whitelist: only these get uploaded. Globs are evaluated against HERE.
INCLUDE = [
    "index.html",
    "apps.json",
    "loader.css",
    "fred-host.js",
    "js/*.js",
    "js/icons/*.js",
]


def color(s, code):
    if not sys.stdout.isatty():
        return s
    return f"\033[{code}m{s}\033[0m"


def red(s):    return color(s, "31")
def green(s):  return color(s, "32")
def yellow(s): return color(s, "33")
def bold(s):   return color(s, "1")


def find_wrangler():
    """Return the command list to run wrangler, or None if unavailable."""
    direct = shutil.which("wrangler") or shutil.which("wrangler.cmd")
    if direct:
        return [direct]
    npx = shutil.which("npx") or shutil.which("npx.cmd")
    if npx:
        return [npx, "--yes", "wrangler"]
    return None


def run_capture(cmd):
    print(yellow(f"$ {' '.join(cmd)}"))
    r = subprocess.run(
        cmd, cwd=HERE, capture_output=True,
        text=True, encoding="utf-8", errors="replace",
    )
    return r.returncode, (r.stdout or "") + (r.stderr or "")


def stream(cmd):
    """Stream output of a command to stdout AND return (code, captured_text)."""
    print(yellow(f"$ {' '.join(cmd)}"))
    proc = subprocess.Popen(
        cmd, cwd=HERE, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
        text=True, encoding="utf-8", errors="replace", bufsize=1,
    )
    captured = []
    for line in proc.stdout:
        sys.stdout.write(line)
        sys.stdout.flush()
        captured.append(line)
    return proc.wait(), "".join(captured)


def check_login(wrangler):
    code, out = run_capture(wrangler + ["whoami"])
    print(out.strip())
    if code != 0 or "not authenticated" in out.lower() or "you are not" in out.lower():
        print(yellow("\nNot logged in — opening browser for Cloudflare login..."))
        code = subprocess.run(wrangler + ["login"], cwd=HERE).returncode
        if code != 0:
            print(red("\nLogin failed. Try `wrangler login` manually and re-run this."))
            sys.exit(1)


def stage_files():
    """Build a clean ./_pages_build/ containing only the whitelisted files."""
    if STAGE.exists():
        shutil.rmtree(STAGE)
    STAGE.mkdir()
    n = 0
    for pattern in INCLUDE:
        # Handle dir-pattern globs like "js/*.js"
        for src in HERE.glob(pattern):
            if not src.is_file():
                continue
            rel = src.relative_to(HERE)
            dest = STAGE / rel
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, dest)
            n += 1
    return n


def ensure_project_exists(wrangler):
    """Create the Pages project if it doesn't already exist."""
    code, out = run_capture(wrangler + ["pages", "project", "list"])
    if PROJECT_NAME in out:
        return
    print(yellow(f"Project '{PROJECT_NAME}' not found — creating it..."))
    code, out = run_capture(wrangler + [
        "pages", "project", "create", PROJECT_NAME,
        f"--production-branch={BRANCH}",
    ])
    print(out.strip())
    if code != 0 and "already exists" not in out.lower():
        print(red(f"\nCould not create project '{PROJECT_NAME}'."))
        print(red("Try a different name by editing PROJECT_NAME at the top of this script."))
        sys.exit(code)


def deploy(wrangler):
    cmd = wrangler + [
        "pages", "deploy", str(STAGE),
        f"--project-name={PROJECT_NAME}",
        f"--branch={BRANCH}",
        "--commit-dirty=true",
    ]
    code, text = stream(cmd)
    if code != 0:
        print(red("\nDeploy failed. Common causes:"))
        print(f"  - Pages project name '{PROJECT_NAME}' taken by someone else")
        print(f"    -> edit PROJECT_NAME in this script and re-run")
        print("  - Not logged in or wrong account")
        print("    -> run `wrangler logout` then re-run this script")
        sys.exit(code)
    m = re.search(r"https://[a-z0-9.-]+\.pages\.dev[^\s]*", text)
    return m.group(0) if m else None


def list_pages_projects(wrangler):
    """Return list of Pages project names from wrangler (plain-text table parse)."""
    code, raw = run_capture(wrangler + ["pages", "project", "list"])
    if code != 0:
        return None
    # Table rows look like:  │ project-name   │ project-name.pages.dev  │ ...
    # Grab the first column of every data row (skip header row with "Name").
    names = []
    for m in re.finditer(r"│\s+([a-z0-9][a-z0-9-]*)\s+│", raw):
        name = m.group(1).strip()
        if name and name != "name":   # "name" is the header
            names.append(name)
    return names


def sync_apps(wrangler):
    """
    After deploy, query Cloudflare for all your Pages projects and add any
    that are missing from apps.json as placeholder entries.

    Only ever ADDS — never removes or modifies existing entries.
    Skips the loader project itself (PROJECT_NAME).
    """
    apps_path = HERE / "apps.json"
    if not apps_path.exists():
        return

    print()
    print(bold("Syncing apps.json with Cloudflare Pages projects…"))

    names = list_pages_projects(wrangler)
    if names is None:
        print(yellow("  Skipping sync — could not fetch project list."))
        return

    with open(apps_path, encoding="utf-8") as f:
        data = json.load(f)

    existing_ids  = {a["id"] for a in data.get("apps", [])}
    existing_urls = {a.get("url", "").rstrip("/") for a in data.get("apps", [])}

    added = []
    for name in names:
        if name == PROJECT_NAME:
            continue                           # skip the loader itself
        url = f"https://{name}.pages.dev"
        if name in existing_ids or url in existing_urls or (url + "/") in existing_urls:
            continue                           # already registered

        pretty_name = name.replace("-", " ").title()
        data["apps"].append({
            "id":    name,
            "name":  pretty_name,
            "icon":  "?",
            "group": "apps",
            "url":   url + "/",
        })
        added.append(name)

    if added:
        with open(apps_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            f.write("\n")
        print(green(f"  Added {len(added)} new app(s): {', '.join(added)}"))
        print(yellow("  → Open Setup in the loader to assign groups and icons."))
    else:
        print(green("  All Cloudflare Pages projects already in apps.json."))


def cleanup():
    if STAGE.exists():
        try:
            shutil.rmtree(STAGE)
        except Exception:
            pass


def main():
    if not WRANGLER_CFG.is_file():
        print(red(f"Missing {WRANGLER_CFG.name} next to this script."))
        sys.exit(1)

    print(bold("Fred App loader — Cloudflare Pages deploy"))
    print(f"  folder:        {HERE}")
    print(f"  project name:  {PROJECT_NAME}")
    print(f"  branch:        {BRANCH}")
    print()

    wrangler = find_wrangler()
    if not wrangler:
        print(red("wrangler not found, and npx not available either."))
        print("Install Node.js (https://nodejs.org) and then either:")
        print("  npm install -g wrangler")
        print("or just re-run this script — npx will fetch wrangler on demand.")
        sys.exit(1)
    print(f"  wrangler via:  {' '.join(wrangler)}")
    print()

    check_login(wrangler)

    print()
    ensure_project_exists(wrangler)

    print()
    n = stage_files()
    print(green(f"Staged {n} files into {STAGE.name}/"))

    print()
    url = deploy(wrangler)

    cleanup()
    sync_apps(wrangler)

    print()
    if url:
        # Pages deploy URLs look like https://<hash>.<project-domain>.pages.dev
        # The production alias is whatever the project-domain part is.
        m = re.match(r"https://([a-z0-9]+)\.([a-z0-9-]+)\.pages\.dev", url)
        prod = f"https://{m.group(2)}.pages.dev/" if m else None
        print(green("Deployed. Your loader is live at:"))
        if prod:
            print(green(f"  {prod}                (production)"))
        print(green(f"  {url}   (this deploy)"))
    else:
        print(green("Deployed."))
        print()
        print("Couldn't parse the exact URL — look for the deployment URL in the wrangler output above.")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        cleanup()
        print("\naborted")
        sys.exit(130)
