// Render the home sidebar: all non-hidden apps, grouped by `group` field.
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
  const icon = document.createElement("span"); icon.className = "icon"; icon.textContent = app.icon || "*";
  el.appendChild(icon);
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
