// Render the desktop sidebar: all non-hidden apps, grouped by `group`.
Fred.renderSidebar = function () {
  const list = Fred.el.appList;
  list.innerHTML = "";
  const visible = Fred.state.apps.filter(a => !a.hidden);

  if (visible.length === 0) {
    const hint = document.createElement("div");
    hint.className = "app-group";
    hint.style.cssText =
      "padding:16px 14px;color:var(--fg-dim);text-transform:none;" +
      "letter-spacing:0;font-size:12px;";
    hint.textContent = Fred.state.editMode
      ? "No visible apps — use + in a section to add one."
      : "No apps in registry. Click edit to add one.";
    list.appendChild(hint);
    return;
  }

  const groups = new Map();
  for (const app of visible) {
    const g = app.group || "apps";
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(app);
  }

  for (const [group, apps] of groups) {
    const h = document.createElement("div");
    h.className = "app-group";
    h.textContent = group;

    if (Fred.state.editMode) {
      const addBtn = document.createElement("button");
      addBtn.className = "group-add";
      addBtn.title = "Add app to “" + group + "”";
      addBtn.textContent = "+";
      addBtn.addEventListener("click", e => {
        e.stopPropagation();
        Fred.showLibraryPanel(group);
      });
      h.appendChild(addBtn);
    }

    list.appendChild(h);
    for (const app of apps) list.appendChild(Fred.makeSidebarItem(app));
  }
};

Fred.makeSidebarItem = function (app) {
  const el = document.createElement("div");
  el.className = "app-item";
  el.dataset.appId = app.id;
  if (app.id === Fred.state.activeId) el.classList.add("active");

  if (Fred.state.editMode) {
    el.draggable = true;
    el.addEventListener("dragstart", e => Fred.dndStart(e, app.id));
    el.addEventListener("dragend",   e => Fred.dndEnd(e));
    el.addEventListener("dragover",  e => Fred.dndOver(e, app.id));
    el.addEventListener("dragleave", e => Fred.dndLeave(e));
    el.addEventListener("drop",      e => Fred.dndDrop(e, app.id));

    const del = document.createElement("button");
    del.className = "edit-delete";
    del.textContent = "×";    // ×
    del.title = "Hide from sidebar";
    del.addEventListener("click", e => {
      e.stopPropagation();
      Fred.editHideApp(app.id);
    });
    el.appendChild(del);
  }

  const iconEl = document.createElement("div");
  iconEl.className = "icon";
  iconEl.innerHTML = Fred.getIcon(app.id);
  el.appendChild(iconEl);

  const name = document.createElement("span");
  name.className = "name";
  name.textContent = app.name || app.id;
  el.appendChild(name);

  if (!Fred.state.editMode) {
    // "remote" tag only carries meaning during local dev (serve.py), where it
    // tells you "this app has no source folder on disk, you'll get the deployed
    // version when you click." On apploader.pages.dev, every app is remote by
    // definition — the tag would be noise.
    if (app.local === false && Fred.isLocalDev()) {
      const tag = document.createElement("span");
      tag.className = "wip";
      tag.textContent = "remote";
      el.appendChild(tag);
    }
    el.title = app.description || app.url || "";
    el.addEventListener("click", () => Fred.openApp(app.id));
  }

  return el;
};

// ── Mobile full-screen app grid ───────────────────────────────────────────
Fred.renderMobileGrid = function () {
  const grid = Fred.el.mobileGrid;
  if (!grid) return;
  grid.innerHTML = "";

  const header = document.createElement("div");
  header.id = "mobile-grid-header";

  const title = document.createElement("h2");
  title.textContent = "Apps";

  const editBtn = document.createElement("button");
  editBtn.id = "mobile-grid-edit";
  editBtn.textContent = Fred.state.editMode ? "done" : "edit";
  editBtn.addEventListener("click", () => {
    if (Fred.state.editMode) Fred.saveAndExitEditMode();
    else Fred.enterEditMode();
  });

  header.appendChild(title);
  header.appendChild(editBtn);
  grid.appendChild(header);

  const visible = Fred.state.apps.filter(a => !a.hidden);
  const groups  = new Map();
  for (const app of visible) {
    const g = app.group || "apps";
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(app);
  }

  for (const [group, apps] of groups) {
    const gh = document.createElement("div");
    gh.className = "mobile-grid-group";
    gh.textContent = group;

    if (Fred.state.editMode) {
      const addBtn = document.createElement("button");
      addBtn.className = "group-add";
      addBtn.title = "Add app to “" + group + "”";
      addBtn.textContent = "+";
      addBtn.addEventListener("click", e => {
        e.stopPropagation();
        Fred.showLibraryPanel(group);
      });
      gh.appendChild(addBtn);
    }

    grid.appendChild(gh);
    for (const app of apps) grid.appendChild(Fred.makeMobileTile(app));
  }
};

Fred.makeMobileTile = function (app) {
  const el = document.createElement("div");
  el.className = "mobile-tile";
  el.setAttribute("role", "button");
  el.setAttribute("tabindex", "0");

  if (Fred.state.editMode) {
    const del = document.createElement("button");
    del.className = "edit-delete";
    del.textContent = "×";    // ×
    del.title = "Hide app";
    del.addEventListener("click", e => {
      e.stopPropagation();
      Fred.editHideApp(app.id);
    });
    el.appendChild(del);
  }

  const iconDiv = document.createElement("div");
  iconDiv.className = "tile-icon";
  iconDiv.innerHTML = Fred.getIcon(app.id);
  el.appendChild(iconDiv);

  const nameEl = document.createElement("div");
  nameEl.className = "tile-name";
  nameEl.textContent = app.name || app.id;
  el.appendChild(nameEl);

  if (!Fred.state.editMode) {
    el.addEventListener("click", () => Fred.openApp(app.id));
    el.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") Fred.openApp(app.id);
    });
  }

  return el;
};