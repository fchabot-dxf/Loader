// Shared global namespace + constants + state object.
window.Fred = window.Fred || {};
Fred.PROTOCOL            = "fred-loader/1";
Fred.HANDSHAKE_TIMEOUT_MS = 250;
Fred.PINNED_KEY          = "fred.pinned";
Fred.PROJECT_KEY         = "fred.project";
Fred.LAST_APP_KEY        = "fred.lastApp";
Fred.APPS_OVERRIDE_KEY   = "fred.appsOverride";   // legacy fallback
Fred.WORKER_URL          = "https://projects-dansemur.dansemur.workers.dev";
Fred.WORKER_APPS_PATH    = "/loader/apps";
Fred.MOBILE_BP           = 768;
Fred.isMobile            = function () { return window.innerWidth <= Fred.MOBILE_BP; };

// True when the loader is being served locally by serve.py (vs deployed on
// apploader.pages.dev). Used to decide whether to surface dev-only UI like
// the "remote" tag — which only carries meaning when there's a local APPS
// folder to compare against.
Fred.isLocalDev = function () {
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h === "0.0.0.0" || h === "";
};

Fred.state = {
  apps: [],
  pinned: new Set(),
  activeId: null,
  project: { name: "untitled project" },
  pendingAck: null,
  setupDraft: null,
  hasServer: false,
};
