// iOS-style "jiggle mode" — edit icons directly in the sidebar / mobile grid.
// Enter edit mode → icons wobble, show × delete badges, sections get + buttons.
// Drag & drop reorders apps. "done" saves; "cancel" reverts.

Fred.state.editMode     = false;
Fred.state.editSnapshot = null;   // deep-copy of apps[] for cancel

// ── Persistence ───────────────────────────────────────────────────────────
Fred.saveAppsToLocalStorage = function () {
  localStorage.setItem(Fred.APPS_OVERRIDE_KEY,
    JSON.stringify({ apps: Fred.state.apps }));
};

// ── Enter / exit ──────────────────────────────────────────────────────────
Fred.enterEditMode = function () {
  if (Fred.state.editMode) return;
  Fred.state.editMode     = true;
  Fred.state.editSnapshot = Fred.state.apps.map(a => ({ ...a }));
  document.body.classList.add("edit-mode");

  // Always expand sidebar so delete badges are reachable
  if (document.body.classList.contains("sidebar-collapsed")) {
    Fred.applySidebarCollapsed(false);
  }

  const btn = document.getElementById("open-edit");
  if (btn) btn.textContent = "done";
  const cancel = document.getElementById("edit-cancel");
  if (cancel) cancel.hidden = false;

  Fred.renderSidebar();
  Fred.renderMobileGrid();
};

Fred.saveAndExitEditMode = function () {
  Fred.saveAppsToLocalStorage();
  Fred._exitEditMode();
};

Fred.cancelEditMode = function () {
  if (Fred.state.editSnapshot) Fred.state.apps = Fred.state.editSnapshot;
  Fred._exitEditMode();
};

Fred._exitEditMode = function () {
  Fred.state.editMode     = false;
  Fred.state.editSnapshot = null;
  document.body.classList.remove("edit-mode");
  Fred.hideLibraryPanel();

  const btn = document.getElementById("open-edit");
  if (btn) btn.textContent = "edit";
  const cancel = document.getElementById("edit-cancel");
  if (cancel) cancel.hidden = true;

  Fred.renderSidebar();
  Fred.renderMobileGrid();
};

// ── Delete (hide) an app ──────────────────────────────────────────────────
Fred.editHideApp = function (id) {
  const app = Fred.state.apps.find(a => a.id === id);
  if (!app) return;
  app.hidden = true;
  Fred.hideLibraryPanel();
  Fred.renderSidebar();
  Fred.renderMobileGrid();
};

// ── Library panel — shows hidden apps that can be re-added ───────────────
Fred.showLibraryPanel = function (group) {
  const panel = document.getElementById("library-panel");
  if (!panel) return;
  panel.dataset.group = group;

  const available = Fred.state.apps.filter(a => !!a.hidden);

  let rows = "";
  if (available.length === 0) {
    rows = `<div class="lib-empty">
      All apps are already visible.<br>
      Delete an app to make it available here.
    </div>`;
  } else {
    for (const app of available) {
      rows += `<div class="lib-row">
        <div class="lib-icon">${Fred.getIcon(app.id)}</div>
        <span class="lib-name">${app.name || app.id}</span>
        <button class="lib-add"
          onclick="Fred.addAppToGroup('${app.id}','${CSS.escape(group)}')">+ add</button>
      </div>`;
    }
  }

  panel.innerHTML = `
    <div class="lib-header">
      <span>Add to <em>${group}</em></span>
      <button class="lib-close" onclick="Fred.hideLibraryPanel()">×</button>
    </div>
    <div class="lib-body">${rows}</div>`;

  panel.hidden = false;
};

Fred.hideLibraryPanel = function () {
  const panel = document.getElementById("library-panel");
  if (panel) panel.hidden = true;
};

Fred.addAppToGroup = function (id, group) {
  const app = Fred.state.apps.find(a => a.id === id);
  if (!app) return;
  app.hidden = false;
  app.group  = group;
  Fred.renderSidebar();
  Fred.renderMobileGrid();
  Fred.hideLibraryPanel();
};

// ── Drag & drop (HTML5 DnD — desktop) ────────────────────────────────────
Fred.dnd = { srcId: null };

Fred.dndStart = function (e, id) {
  Fred.dnd.srcId = id;
  e.currentTarget.classList.add("dragging");
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", id);
};

Fred.dndEnd = function (e) {
  Fred.dnd.srcId = null;
  e.currentTarget.classList.remove("dragging");
  document.querySelectorAll(".drop-before,.drop-after")
    .forEach(el => el.classList.remove("drop-before", "drop-after"));
};

Fred.dndOver = function (e, id) {
  if (!Fred.dnd.srcId || Fred.dnd.srcId === id) return;
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  const rect = e.currentTarget.getBoundingClientRect();
  document.querySelectorAll(".drop-before,.drop-after")
    .forEach(el => el.classList.remove("drop-before", "drop-after"));
  e.currentTarget.classList.add(
    e.clientY < rect.top + rect.height / 2 ? "drop-before" : "drop-after");
};

Fred.dndLeave = function (e) {
  e.currentTarget.classList.remove("drop-before", "drop-after");
};

Fred.dndDrop = function (e, targetId) {
  e.preventDefault();
  const srcId = Fred.dnd.srcId;
  if (!srcId || srcId === targetId) return;

  const apps   = Fred.state.apps;
  const srcIdx = apps.findIndex(a => a.id === srcId);
  if (srcIdx < 0) return;

  const after = e.currentTarget.classList.contains("drop-after");

  // Pluck source out
  const [srcApp] = apps.splice(srcIdx, 1);

  // Adopt target's group so dropping across sections "moves" the app
  const tgt = apps.find(a => a.id === targetId);
  if (tgt) srcApp.group = tgt.group;

  // Re-insert
  const newIdx = apps.findIndex(a => a.id === targetId);
  if (newIdx < 0) { apps.push(srcApp); }
  else apps.splice(after ? newIdx + 1 : newIdx, 0, srcApp);

  Fred.renderSidebar();
  Fred.renderMobileGrid();
};
