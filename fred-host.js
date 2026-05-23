/*
 * fred-host.js — optional adapter for apps loaded inside the Fred App loader.
 *
 * Drop this script into any app:
 *     <script src="/path/to/fred-host.js" defer></script>
 *
 * If the app is loaded inside the Fred loader, it exposes window.fredHost
 * with a small API for sharing project state, and injects a small
 * "← Fred App" pill in the corner so users can pop back to the launcher.
 * If the app is opened standalone, the adapter goes silent — nothing breaks.
 *
 * Opt out of the home pill with `data-no-home-button`:
 *     <script src="fred-host.js" data-no-home-button defer></script>
 *
 * Listen for the ready event before using the API:
 *     window.addEventListener("fredhost:ready", (e) => {
 *         console.log("hosted by fred", e.detail);
 *         window.fredHost.setProject({ name: "Bedside table" });
 *     });
 */
(function () {
  "use strict";

  const PROTOCOL = "fred-loader/1";
  const READY_TIMEOUT_MS = 500;

  // If we're not framed at all, nothing to do.
  let framed = false;
  try {
    framed = window.self !== window.top;
  } catch (e) {
    framed = true; // cross-origin frame access throws — we are framed
  }
  if (!framed) return;

  let host = null;
  const listeners = { project: [], message: [] };

  function api() {
    return {
      /** Loader info we got at hello time. */
      get info() {
        return host ? { ...host } : null;
      },
      /** Current project snapshot the loader sent us. */
      get project() {
        return host && host.project ? { ...host.project } : null;
      },
      /** Replace the entire project object. */
      setProject(project) {
        post({ type: "project-set", project });
        if (host) host.project = project;
      },
      /** Merge a patch into the project; loader broadcasts to other apps. */
      mergeProject(patch) {
        post({ type: "project-merge", patch });
        if (host) host.project = { ...(host.project || {}), ...patch };
      },
      /** Ask the loader to switch to another app by id. */
      openApp(appId) {
        post({ type: "open-app", appId });
      },
      /** Send an arbitrary message to the loader. */
      send(type, payload) {
        post({ type, payload });
      },
      /** Subscribe to project-update broadcasts. */
      onProject(fn) {
        listeners.project.push(fn);
        return () => {
          const i = listeners.project.indexOf(fn);
          if (i >= 0) listeners.project.splice(i, 1);
        };
      },
      /** Subscribe to all messages from loader. */
      onMessage(fn) {
        listeners.message.push(fn);
        return () => {
          const i = listeners.message.indexOf(fn);
          if (i >= 0) listeners.message.splice(i, 1);
        };
      },
    };
  }

  function post(msg) {
    try {
      window.parent.postMessage({ protocol: PROTOCOL, ...msg }, "*");
    } catch (e) {
      // parent gone, ignore
    }
  }

  window.addEventListener("message", (ev) => {
    const data = ev.data;
    if (!data || data.protocol !== PROTOCOL) return;

    // First contact from loader.
    if (data.type === "hello") {
      host = {
        app: data.app || null,
        project: data.project || {},
      };
      window.fredHost = api();
      // Tell the loader we heard it.
      post({ type: "hello-ack", app: data.app });
      // Announce to the app.
      window.dispatchEvent(new CustomEvent("fredhost:ready", { detail: host }));
      // Inject the home pill if the app opted in.
      maybeInjectHomeButton();
      return;
    }

    if (data.type === "project-update") {
      if (host) host.project = data.project || {};
      for (const fn of listeners.project) {
        try { fn(host ? host.project : null); } catch (e) { console.error(e); }
      }
      return;
    }

    for (const fn of listeners.message) {
      try { fn(data); } catch (e) { console.error(e); }
    }
  });

  // If no hello arrives within the timeout, we're framed by something
  // that isn't the Fred loader. Stay silent.
  setTimeout(() => {
    if (!host) {
      // no-op; window.fredHost stays undefined, app behaves standalone
    }
  }, READY_TIMEOUT_MS);

  /* -----  home button (auto-on, opt-out per app)  ----- */
  function maybeInjectHomeButton() {
    const tag = document.currentScript ||
                document.querySelector('script[src*="fred-host.js"]');
    if (tag && tag.hasAttribute("data-no-home-button")) return;
    if (document.getElementById("fred-home-pill")) return;

    const btn = document.createElement("button");
    btn.id = "fred-home-pill";
    btn.type = "button";
    btn.textContent = "← Fred App";
    btn.title = "Back to Fred App launcher";
    btn.style.cssText = [
      "position:fixed",
      "left:12px",
      "bottom:12px",
      "z-index:2147483647",
      "padding:6px 10px",
      "font:12px -apple-system,Segoe UI,system-ui,sans-serif",
      "color:#e8e8e8",
      "background:rgba(35,35,35,0.92)",
      "border:1px solid #444",
      "border-radius:14px",
      "cursor:pointer",
      "box-shadow:0 2px 8px rgba(0,0,0,0.35)",
    ].join(";");
    btn.addEventListener("mouseenter", () => {
      btn.style.background = "rgba(58,58,58,0.95)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.background = "rgba(35,35,35,0.92)";
    });
    btn.addEventListener("click", () => post({ type: "go-home" }));

    const place = () => {
      if (document.body) document.body.appendChild(btn);
      else document.addEventListener("DOMContentLoaded", () => document.body.appendChild(btn));
    };
    place();
  }
})();
