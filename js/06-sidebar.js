// Render the desktop sidebar: all non-hidden apps, grouped by `group`.
Fred.renderSidebar = function () {
  const list = document.getElementById("app-list");
  list.innerHTML = "";
  const visible = Fred.state.apps.filter(a => !a.hidden);

  if (visible.length === 0) {
    const hint = document.createElement("div");
    hint.className = "app-group";
    hint.style.cssText = "padding:16px 14px;color:var(--fg-dim);text-transform:none;letter-spacing:0;font-size:12px;";
    hint.textContent = "no apps in registry. click setup to add one.";
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
    const h = document.createElement("div"); h.className = "app-group"; h.textContent = group;
    list.appendChild(h);
    for (const app of apps) list.appendChild(Fred.makeSidebarItem(app));
  }
};

Fred.makeSidebarItem = function (app) {
  const el = document.createElement("div");
  el.className = "app-item";
  el.dataset.appId = app.id;
  if (app.id === Fred.state.activeId) el.classList.add("active");

  const iconEl = document.createElement("div");
  iconEl.className = "icon";
  iconEl.innerHTML = Fred.getIcon(app.id);
  el.appendChild(iconEl);

  const name = document.createElement("span"); name.className = "name"; name.textContent = app.name || app.id;
  el.appendChild(name);

  if (app.local === false) {
    const tag = document.createElement("span"); tag.className = "wip"; tag.textContent = "remote";
    el.appendChild(tag);
  }
  el.title = app.description || app.url || "";
  el.addEventListener("click", () => Fred.openApp(app.id));
  return el;
};

// Render the mobile full-screen app grid.
Fred.renderMobileGrid = function () {
  const grid = document.getElementById("mobile-grid");
  if (!grid) return;
  grid.innerHTML = "";

  // Header
  const header = document.createElement("div");
  header.id = "mobile-grid-header";
  const title = document.createElement("h2"); title.textContent = "Apps";
  const setupBtn = document.createElement("button"); setupBtn.id = "mobile-grid-setup"; setupBtn.textContent = "setup";
  setupBtn.addEventListener("click", Fred.openSetup);
  header.appendChild(title); header.appendChild(setupBtn);
  grid.appendChild(header);

  const visible = Fred.state.apps.filter(a => !a.hidden);
  const groups = new Map();
  for (const app of visible) {
    const g = app.group || "apps";
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(app);
  }
  for (const [group, apps] of groups) {
    const gh = document.createElement("div");
    gh.className = "mobile-grid-group";
    gh.textContent = group;
    grid.appendChild(gh);
    for (const app of apps) grid.appendChild(Fred.makeMobileTile(app));
  }
};

Fred.makeMobileTile = function (app) {
  const el = document.createElement("div");
  el.className = "mobile-tile";
  el.setAttribute("role", "button");
  el.setAttribute("tabindex", "0");

  const iconDiv = document.createElement("div");
  iconDiv.className = "tile-icon";
  iconDiv.innerHTML = Fred.getIcon(app.id);
  el.appendChild(iconDiv);

  const name = document.createElement("div");
  name.className = "tile-name";
  name.textContent = app.name || app.id;
  el.appendChild(name);

  el.addEventListener("click", () => Fred.openApp(app.id));
  el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") Fred.openApp(app.id); });
  return el;
};
