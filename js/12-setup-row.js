// One row in the setup view: pin checkbox + editable fields + delete/add button.
Fred.makeSetupRow = function (app) {
  const row = document.createElement("div");
  row.className = "setup-row";
  if (app._isAddNew) row.classList.add("add-new");

  const pin = document.createElement("input");
  pin.type = "checkbox";
  pin.checked = !app._isAddNew && Fred.state.setupDraft.pinned.has(app.id);
  pin.disabled = !!app._isAddNew;
  pin.addEventListener("change", () => {
    if (pin.checked) Fred.state.setupDraft.pinned.add(app.id);
    else Fred.state.setupDraft.pinned.delete(app.id);
    Fred.updateSetupDirty();
  });
  row.appendChild(pin);

  const inputs = {};
  const fields = [
    { cls: "icon-cell", key: "icon", ph: "*", max: 2 },
    { cls: "name-cell", key: "name", ph: "App name" },
    { cls: "url-cell", key: "url", ph: app._isAddNew ? "https://..." : "(no url)" },
    { cls: "group-cell", key: "group", ph: "group" },
  ];
  for (const c of fields) {
    const cell = document.createElement("div"); cell.className = c.cls;
    const inp = document.createElement("input"); inp.type = "text";
    if (c.max) inp.maxLength = c.max;
    inp.value = app[c.key] || ""; inp.placeholder = c.ph;
    inp.addEventListener("input", () => { app[c.key] = inp.value; Fred.updateSetupDirty(); });
    cell.appendChild(inp); row.appendChild(cell);
    inputs[c.key] = inp;
  }

  const badge = document.createElement("div");
  if (app._isAddNew) badge.textContent = "";
  else if (app.local === true) { badge.className = "badge local"; badge.textContent = "on disk"; }
  else { badge.className = "badge remote"; badge.textContent = "remote"; }
  row.appendChild(badge);

  row.appendChild(app._isAddNew ? Fred.makeAddButton(inputs) : Fred.makeDeleteButton(app));
  return row;
};

Fred.makeAddButton = function (inputs) {
  const btn = document.createElement("button");
  btn.className = "delete";
  btn.style.cssText = "border-color:#4a8a4a;color:#8cd08c;";
  btn.textContent = "add";
  btn.addEventListener("click", () => {
    const seed = inputs.name.value || inputs.url.value || "new-app";
    const slug = seed.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    if (!slug) return;
    if (Fred.state.setupDraft.apps.find(a => a.id === slug)) {
      alert('An app with id "' + slug + '" already exists.');
      return;
    }
    Fred.state.setupDraft.apps.push({
      id: slug, name: inputs.name.value || slug,
      icon: inputs.icon.value || "*", group: inputs.group.value || "apps",
      url: inputs.url.value || "", local: false,
    });
    Fred.renderSetup(); Fred.updateSetupDirty();
  });
  return btn;
};

Fred.makeDeleteButton = function (app) {
  const btn = document.createElement("button");
  btn.className = "delete";
  btn.textContent = "delete";
  btn.addEventListener("click", () => {
    if (!confirm('Remove "' + (app.name || app.id) + '" from the registry?')) return;
    Fred.state.setupDraft.apps = Fred.state.setupDraft.apps.filter(a => a.id !== app.id);
    Fred.state.setupDraft.pinned.delete(app.id);
    Fred.renderSetup(); Fred.updateSetupDirty();
  });
  return btn;
};
