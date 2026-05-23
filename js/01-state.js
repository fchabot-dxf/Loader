// Shared global namespace + constants + state object.
window.Fred = window.Fred || {};
Fred.PROTOCOL = "fred-loader/1";
Fred.HANDSHAKE_TIMEOUT_MS = 250;
Fred.PINNED_KEY = "fred.pinned";
Fred.PROJECT_KEY = "fred.project";
Fred.LAST_APP_KEY = "fred.lastApp";
Fred.APPS_OVERRIDE_KEY = "fred.appsOverride";

Fred.state = {
  apps: [],
  pinned: new Set(),
  activeId: null,
  project: { name: "untitled project" },
  pendingAck: null,
  setupDraft: null,
  hasServer: false,
};
