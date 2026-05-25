// Setup view: orchestration — open, close, top-level render.
Fred.openSetup = function () {
  Fred.state.setupDraft = {
    apps: Fred.state.apps.map(a => ({ ...a })),
  };
  Fred.showView("setup");
  Fred.renderSetup();
  Fred.updateSetupDirty();
};

Fred.closeSetup = function () {
  Fred.state.setupDraft = null;
  Fred.showView(Fred.state.activeId ? "frame" : "welcome");
};

Fred.renderSetup = function () {
  const list = document.getElementById("setup-list");
  list.innerHTML = "";
  document.getElementById("setup-status").textContent = Fred.state.hasServer
    ? "saving to apps.json on disk"
    : "saving to this browser (no server)";

  const groups = new Map();
  for (const app of Fred.state.setupDraft.apps) {
    const g = app.group || "apps";
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(app);
  }
  groups.set("+ add new", [{ _isAddNew: true }]);

  for (const [group, apps] of groups) {
    const h = document.createElement("div"); h.className = "setup-group"; h.textContent = group;
    list.appendChild(h);
    for (const app of apps) list.appendChild(Fred.makeSetupRow(app));
  }
};
