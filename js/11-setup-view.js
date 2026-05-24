// Setup view: orchestration — open, close, top-level render.
Fred.openSetup = function () {
  Fred.state.setupDraft = {
    apps: Fred.state.apps.map(a => ({ ...a })),
  };
  document.getElementById("welcome").hidden = true;
  document.getElementById("app-frame").hidden = true;
  document.getElementById("setup-view").hidden = false;
  Fred.renderSetup();
  Fred.updateSetupDirty();
};

Fred.closeSetup = function () {
  document.getElementById("setup-view").hidden = true;
  Fred.state.setupDraft = null;
  if (Fred.state.activeId) document.getElementById("app-frame").hidden = false;
  else document.getElementById("welcome").hidden = false;
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
