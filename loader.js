/*
 * Fred App loader (loader2.js — written to fresh path to dodge a stuck file)
 *
 * Three modes, same code:
 *   - python serve.py    (live folder scan, /apps.json from server, persists writes)
 *   - deployed (CDN)     (static /apps.json, read-only)
 *   - opened as file://  (./apps.json from disk, read-only)
 *
 * Sidebar shows only PINNED apps (per-PC, localStorage). Setup view
 * shows the whole registry — pick what stays on the home, edit fields,
 * delete entries.
 */

const PROTOCOL = "fred-loader/1";
const HANDSHAKE_TIMEOUT_MS = 250;
const PINNED_KEY = "fred.pinned";

const state = {
  apps: [],
  pinned: new Set(),
  activeId: null,
  project: loadProject(),
  pendingAck: null,
  setupDraft: null,
  hasServer: false,
};

document.addEventListener("DOMContentLoaded", async () => {
  state.pinned = loadPinned();
  bindControls();
  state.apps = await loadApps();
  renderSidebar();
  renderProjectName();
  maybeRestoreLast();
});

async function loadApps() {
  const tried = [];
  for (const url of ["/apps.json", "./apps.json", "apps.json"]) {
    try {
      const r = await fetch(url, { cache: "no-store" });
      if (!r.ok) { tried.push(`${url} -> ${r.status}`); continue; }
      const data = await r.json();
      if (data && Array.isArray(data.apps)) {
        state.hasServer = url === "/apps.json";
        return data.apps;
      }
    } catch (e) {
      tried.push(`${url} -> ${e.message}`);
    }
  }
  // file:// fallback — read inline JSON embedded in index.html
  const inline = document.getElementById("apps-inline");
  if (inline) {
    try {
      const data = JSON.parse(inline.textContent);
      if (data && Array.isArray(data.apps)) return data.apps;
    } catch (e) {
      tried.push(`inline -> ${e.message}`);
    }
  }
  showWelcome("Couldn't find apps.json. Tried:\n" + tried.join("\n") +
    "\n\nRun `python serve.py`, or place an apps.json next to index.html.");
  return [];
}

function maybeRestoreLast() {
  const last = localStorage.getItem("fred.lastApp");
  if (last && isPinned(last) && state.apps.find((a) => a.id === last)) {
    openApp(last);
  }
}

function loadPinned() {
  try {
    const raw = localStorage.getItem(PINNED_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw));
  } catch { return new Set(); }
}
function savePinned() {
  try { localStorage.setItem(PINNED_KEY, JSON.stringify([...state.pinned])); } catch {}
}
function isPinned(id) { return state.pinned.has(id); }

function renderSidebar() {
  const list = document.getElementById("app-list");
  list.innerHTML = "";
  const pinnedApps = state.apps.filter((a) => isPinned(a.id) && !a.hidden);

  if (pinnedApps.length === 0) {
    const hint = document.createElement("div");
    hint.className = "app-group";
    hint.style.cssText = "padding: 16px 14px; color: var(--fg-dim); text-transform: none; letter-spacing: 0; font-size: 12px;";
    hint.textContent = "no apps pinned. click setup below.";
    list.appendChild(hint);
    return;
  }

  const groups = new Map();
  for (const app of pinnedApps) {
    const g = app.group || "apps";
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(app);
  }
  for (const [group, apps] of groups) {
    const h = document.createElement("div");
    h.className = "app-group";
    h.textContent = group;
    list.appendChild(h);
    for (const app of apps) list.appendChild(renderAppItem(app));
  }
}

function renderAppItem(app) {
  const el = document.createElement("div");
  el.className = "app-item";
  el.dataset.appId = app.id;
  if (app.id === state.activeId) el.classList.add("active");
  const icon = document.createElement("span");
  icon.className = "icon";
  icon.textContent = app.icon || "*";
  el.appendChild(icon);
  const name = document.createElement("span");
  name.className = "name";
  name.textContent = app.name || app.id;
  el.appendChild(name);
  if (app.local === false) {
    const tag = document.createElement("span");
    tag.className = "wip";
    tag.textContent = "remote";
    el.appendChild(tag);
  }
  el.title = app.description || app.url || "";
  el.addEventListener("click", () => openApp(app.id));
  return el;
}

function openApp(id) {
  const app = state.apps.find((a) => a.id === id);
  if (!app) return;
  if (!app.url) { showWelcome(`No URL for "${app.name || app.id}". Open setup to add one.`); return; }
  closeSetup();
  state.activeId = id;
  localStorage.setItem("fred.lastApp", id);
  for (const el of document.querySelectorAll(".app-item")) {
    el.classList.toggle("active", el.dataset.appId === id);
  }
  const frame = document.getElementById("app-frame");
  document.getElementById("welcome").hidden = true;
  frame.hidden = false;
  frame.src = app.url;
  frame.onload = () => sendHandshake(app);
}

function sendHandshake(app) {
  const frame = document.getElementById("app-frame");
  const win = frame.contentWindow;
  if (!win) return;
  if (state.pendingAck) clearTimeout(state.pendingAck.timer);
  try {
    win.postMessage({
      protocol: PROTOCOL, type: "hello",
      app: { id: app.id, name: app.name }, project: state.project,
    }, "*");
  } catch (e) { console.warn("[loader] handshake failed:", e); }
  state.pendingAck = { id: app.id, timer: setTimeout(() => { state.pendingAck = null; }, HANDSHAKE_TIMEOUT_MS) };
}

window.addEventListener("message", (ev) => {
  const data = ev.data;
  if (!data || data.protocol !== PROTOCOL) return;
  if (data.type === "hello-ack") {
    if (state.pendingAck) { clearTimeout(state.pendingAck.timer); state.pendingAck = null; }
    return;
  }
  if (data.type === "project-set") { state.project = data.project || {}; saveProject(); renderProjectName(); return; }
  if (data.type === "project-merge") { state.project = { ...state.project, ...(data.patch || {}) }; saveProject(); renderProjectName(); broadcastProject(); return; }
  if (data.type === "open-app") { if (data.appId && state.apps.find((a) => a.id === data.appId)) openApp(data.appId); return; }
  if (data.type === "go-home") { goHome(); return; }
});

function broadcastProject() {
  const frame = document.getElementById("app-frame");
  if (!frame.contentWindow) return;
  frame.contentWindow.postMessage({ protocol: PROTOCOL, type: "project-update", project: state.project }, "*");
}

function goHome() {
  state.activeId = null;
  localStorage.removeItem("fred.lastApp");
  const frame = document.getElementById("app-frame");
  frame.hidden = true;
  frame.src = "about:blank";
  document.getElementById("welcome").hidden = false;
  for (const el of document.querySelectorAll(".app-item.active")) el.classList.remove("active");
}

function loadProject() {
  try { const raw = localStorage.getItem("fred.project"); return raw ? JSON.parse(raw) : { name: "untitled project" }; }
  catch { return { name: "untitled project" }; }
}
function saveProject() { try { localStorage.setItem("fred.project", JSON.stringify(state.project)); } catch {} }
function renderProjectName() {
  document.getElementById("project-name").textContent = state.project.name || "untitled project";
}

function openSetup() {
  state.setupDraft = { apps: state.apps.map((a) => ({ ...a })), pinned: new Set(state.pinned) };
  document.getElementById("welcome").hidden = true;
  document.getElementById("app-frame").hidden = true;
  document.getElementById("setup-view").hidden = false;
  renderSetup();
  updateSetupDirty();
}

function closeSetup() {
  document.getElementById("setup-view").hidden = true;
  state.setupDraft = null;
  if (state.activeId) document.getElementById("app-frame").hidden = false;
  else document.getElementById("welcome").hidden = false;
}

function renderSetup() {
  const list = document.getElementById("setup-list");
  list.innerHTML = "";
  const status = document.getElementById("setup-status");
  status.textContent = state.hasServer ? "saving to apps.json on disk" : "saving to this browser (no server) - export to share";

  const groups = new Map();
  for (const app of state.setupDraft.apps) {
    const g = app.group || "apps";
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(app);
  }
  groups.set("+ add new", [{ _isAddNew: true }]);

  for (const [group, apps] of groups) {
    const h = document.createElement("div");
    h.className = "setup-group";
    h.textContent = group;
    list.appendChild(h);
    for (const app of apps) list.appendChild(renderSetupRow(app));
  }
}

function renderSetupRow(app) {
  const row = document.createElement("div");
  row.className = "setup-row";
  if (app._isAddNew) row.classList.add("add-new");

  const pin = document.createElement("input");
  pin.type = "checkbox";
  pin.checked = !app._isAddNew && state.setupDraft.pinned.has(app.id);
  pin.disabled = !!app._isAddNew;
  pin.title = "Show on home";
  pin.addEventListener("change", () => {
    if (pin.checked) state.setupDraft.pinned.add(app.id);
    else state.setupDraft.pinned.delete(app.id);
    updateSetupDirty();
  });
  row.appendChild(pin);

  const iconCell = document.createElement("div"); iconCell.className = "icon-cell";
  const iconIn = document.createElement("input");
  iconIn.type = "text"; iconIn.maxLength = 2; iconIn.value = app.icon || ""; iconIn.placeholder = "*";
  iconIn.addEventListener("input", () => { app.icon = iconIn.value; updateSetupDirty(); });
  iconCell.appendChild(iconIn); row.appendChild(iconCell);

  const nameCell = document.createElement("div"); nameCell.className = "name-cell";
  const nameIn = document.createElement("input");
  nameIn.type = "text"; nameIn.value = app.name || ""; nameIn.placeholder = "App name";
  nameIn.addEventListener("input", () => { app.name = nameIn.value; updateSetupDirty(); });
  nameCell.appendChild(nameIn); row.appendChild(nameCell);

  const urlCell = document.createElement("div"); urlCell.className = "url-cell";
  const urlIn = document.createElement("input");
  urlIn.type = "text"; urlIn.value = app.url || "";
  urlIn.placeholder = app._isAddNew ? "https://... or /apps/folder/" : "(no url)";
  urlIn.addEventListener("input", () => { app.url = urlIn.value; updateSetupDirty(); });
  urlCell.appendChild(urlIn); row.appendChild(urlCell);

  const groupCell = document.createElement("div"); groupCell.className = "group-cell";
  const groupIn = document.createElement("input");
  groupIn.type = "text"; groupIn.value = app.group || ""; groupIn.placeholder = "group";
  groupIn.addEventListener("input", () => { app.group = groupIn.value; updateSetupDirty(); });
  groupCell.appendChild(groupIn); row.appendChild(groupCell);

  const badge = document.createElement("div");
  if (app._isAddNew) { badge.textContent = ""; }
  else if (app.local === true) { badge.className = "badge local"; badge.textContent = "on disk"; }
  else { badge.className = "badge remote"; badge.textContent = "remote"; }
  row.appendChild(badge);

  if (app._isAddNew) {
    const add = document.createElement("button");
    add.className = "delete";
    add.style.cssText = "border-color: #4a8a4a; color: #8cd08c;";
    add.textContent = "add";
    add.addEventListener("click", () => {
      const id = (nameIn.value || urlIn.value || "new-app").trim();
      if (!id) return;
      const slug = id.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      if (state.setupDraft.apps.find((a) => a.id === slug)) { alert(`An app with id "${slug}" already exists.`); return; }
      state.setupDraft.apps.push({
        id: slug, name: nameIn.value || slug, icon: iconIn.value || "*",
        group: groupIn.value || "apps", url: urlIn.value || "", local: false,
      });
      renderSetup(); updateSetupDirty();
    });
    row.appendChild(add);
  } else {
    const del = document.createElement("button");
    del.className = "delete";
    del.textContent = "delete";
    del.title = "Remove from the registry on every PC (after save).";
    del.addEventListener("click", () => {
      if (!confirm(`Remove "${app.name || app.id}" from the registry?`)) return;
      state.setupDraft.apps = state.setupDraft.apps.filter((a) => a.id !== app.id);
      state.setupDraft.pinned.delete(app.id);
      renderSetup(); updateSetupDirty();
    });
    row.appendChild(del);
  }
  return row;
}

function updateSetupDirty() {
  const d = document.getElementById("setup-dirty");
  if (!d) return;
  d.textContent = setupIsDirty() ? "unsaved changes" : "";
}

function setupIsDirty() {
  if (!state.setupDraft) return false;
  const a = [...state.pinned].sort().join(",");
  const b = [...state.setupDraft.pinned].sort().join(",");
  if (a !== b) return true;
  if (state.apps.length !== state.setupDraft.apps.length) return true;
  for (let i = 0; i < state.apps.length; i++) {
    if (JSON.stringify(state.apps[i]) !== JSON.stringify(state.setupDraft.apps[i])) return true;
  }
  return false;
}

async function saveSetup() {
  if (!state.setupDraft) return;
  state.pinned = new Set(state.setupDraft.pinned);
  savePinned();

  const payload = { apps: state.setupDraft.apps };
  if (state.hasServer) {
    try {
      const r = await fetch("/apps.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error(`server returned ${r.status}`);
      const updated = await r.json();
      state.apps = updated.apps || state.setupDraft.apps;
    } catch (e) {
      alert("Couldn't save to server: " + e.message + "\nKept your edits in-browser.");
      state.apps = state.setupDraft.apps;
      localStorage.setItem("fred.appsOverride", JSON.stringify(payload));
    }
  } else {
    state.apps = state.setupDraft.apps;
    localStorage.setItem("fred.appsOverride", JSON.stringify(payload));
  }

  renderSidebar();
  renderSetup();
  updateSetupDirty();
}

function discardSetup() {
  if (setupIsDirty() && !confirm("Discard unsaved changes?")) return;
  closeSetup();
}

function bindControls() {
  document.getElementById("project-name").addEventListener("click", () => {
    const next = prompt("Project name:", state.project.name || "");
    if (next != null) {
      state.project.name = next.trim() || "untitled project";
      saveProject(); renderProjectName(); broadcastProject();
    }
  });
  document.getElementById("reload-app").addEventListener("click", () => {
    if (!state.activeId) return;
    const frame = document.getElementById("app-frame");
    frame.src = frame.src;
  });
  document.getElementById("pop-out").addEventListener("click", () => {
    if (!state.activeId) return;
    const app = state.apps.find((a) => a.id === state.activeId);
    if (app && app.url) window.open(app.url, "_blank");
  });
  document.getElementById("open-setup").addEventListener("click", openSetup);
  document.getElementById("setup-close").addEventListener("click", discardSetup);
  document.getElementById("setup-save").addEventListener("click", saveSetup);
  document.getElementById("setup-discard").addEventListener("click", discardSetup);
}

function showWelcome(msg) {
  const w = document.getElementById("welcome");
  if (msg) {
    w.innerHTML = "";
    const h = document.createElement("h2"); h.textContent = "no apps yet"; w.a