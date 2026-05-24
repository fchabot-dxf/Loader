# Fred App — loader

One launcher for all the Fred tools. The loader is a thin shell: a sidebar of apps and an iframe that loads whichever one you pick. Each app keeps its own codebase and deploy; the loader just lets you switch between them in one window and (optionally) share a "current project" between them.

## Mental model

It's like a tablet home screen with an edit mode.

- **`apps.json`** is the registry — a persistent ledger of every app the loader has ever seen, on any PC. Additive: things only get added or edited, never silently removed. This is the file you commit and deploy.
- **Home sidebar** shows only the apps you've **pinned** on _this PC_ (stored in `localStorage`). A fresh PC starts empty.
- **Setup view** is edit mode. It shows the whole registry; check the apps you want on the home, edit fields, or delete entries entirely (delete touches the registry, so it propagates everywhere after you save).

## Three modes, same loader

The loader fetches `apps.json` on boot. What that returns depends on how the loader is being served:

1. **`python serve.py`** — local dev. The server scans the parent `APPS/` folder, finds anything with an `index.html`-ish entry, **adds any new folders to `apps.json` on disk** (never removes), and refreshes each entry's `localUrl` based on what's on this PC right now. The setup view writes back to the file via `POST /apps.json`.
2. **Deployed to Cloudflare** — `apps.json` is the static checked-in file; apps load from their deployed URLs. Setup edits stay in `localStorage` as an override on top.
3. **Opened as a local file (`file://`)** — same static `apps.json`; apps load from their deployed URLs (browsers don't reliably iframe-load other `file://` pages).

So: write to the registry from `serve.py`. Read it everywhere.

## Run locally

```
python serve.py
# then open http://localhost:8765/
```

Drop a folder into `APPS/` with an `index.html` (or `dist/index.html`) and it shows up on next page reload.

## Add an app to the registry

Edit `apps.json`:

```json
{
  "id": "my-app",
  "name": "My App",
  "icon": "✦",
  "group": "calc",
  "description": "what it does",
  "url": "https://my-app.workers.dev/"
}
```

`id` should match the folder name in `APPS/` if you want serve.py to merge it.

## Optional: integrate an app with the loader

Apps that include `fred-host.js` can share a project state with siblings.

```html
<script src="/fred-host.js" defer></script>
```

```js
window.addEventListener("fredhost:ready", (e) => {
  console.log("hosted by fred", e.detail);
  const fh = window.fredHost;
  fh.mergeProject({ lastSvg: "<svg>...</svg>" });
  fh.onProject((project) => render(project));
});
```

Apps that don't include `fred-host.js` still load fine in the loader iframe — they just can't share state. **Loader-aware is opt-in, per app, one at a time.**

Including `fred-host.js` also injects a small "← Fred App" pill bottom-left when the app is framed by the loader, so users can pop back to the launcher. Opt out per-app with `<script src="fred-host.js" data-no-home-button defer>`.

## Files

| File           | What it is                                         |
| -------------- | -------------------------------------------------- |
| `index.html`   | Loader page                                        |
| `loader.js`    | Sidebar, iframe management, handshake, project state |
| `loader.css`   | Styling                                            |
| `fred-host.js` | Adapter apps include to opt into loader integration |
| `apps.json`    | Static registry                                    |
| `serve.py`     | Local dev server with live folder discovery        |
