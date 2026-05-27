// iOS-style "jiggle mode" — edit icons directly in the sidebar / mobile grid.
// Enter edit mode: icons wobble, show × delete badges, sections get + buttons.
// Drag & drop reorders apps. "done" saves to localStorage; "cancel" reverts.

Fred.state.editMode     = false;
Fred.state.editSnapshot = null;   // deep-copy of apps[] used for cancel

// ── Persistence ───────────────────────────────────────────────────────────
// Name kept for historical reasons; this now PUTs to the worker first and
// falls back to localStorage only if the worker is unreachable.
Fred.saveAppsToLocalStorage = async function () {
  const apps    = Fred.state.apps;
  const payload = { apps };
  try {
    await Fred.saveAppsToWorker(apps);
  } catch (e) {
    console.warn("[loader] worker save failed, kept in localStorage:", e.message);
    localStorage.setItem(Fred.APPS_OVERRIDE_KEY, JSON.stringify(payload));
  }
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

  const doneBtn   = document.getElementById("open-edit");
  const cancelBtn = document.getElementById("edit-cancel");
  if (doneBtn)   doneBtn.textContent = "done";
  if (cancelBtn) cancelBtn.hidden = false;

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

  const doneBtn   = document.getElementById("open-edit");
  const cancelBtn = document.getElementById("edit-cancel");
  if (doneBtn)   doneBtn.textContent = "edit";
  if (cancelBtn) cancelBtn.hidden = true;

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

// ── Library panel — shows hidden apps that can be restored ───────────────
Fred.showLibraryPanel = function (group) {
  const panel = document.getElementById("library-panel");
  if (!panel) return;
  panel.dataset.group = group;

  // Clear previous content
  panel.innerHTML = "";

  // Header
  const header = document.createElement("div");
  header.className = "lib-header";

  const headerLabel = document.createElement("span");
  const labelText   = document.createTextNode("Add to ");
  const labelEm     = document.createElement("em");
  labelEm.textContent = group;
  headerLabel.appendChild(labelText);
  headerLabel.appendChild(labelEm);

  const closeBtn = document.createElement("button");
  closeBtn.className   = "lib-close";
  closeBtn.textContent = "×";
  closeBtn.addEventListener("click", Fred.hideLibraryPanel);

  header.appendChild(headerLabel);
  header.appendChild(closeBtn);
  panel.appendChild(header);

  // Body
  const body      = document.createElement("div");
  body.className  = "lib-body";
  const available = Fred.state.apps.filter(a => !!a.hidden);

  if (available.length === 0) {
    const empty = document.createElement("div");
    empty.className = "lib-empty";
    empty.textContent =
      "All apps are already visible. " +
      "Remove an app first to make it available here.";
    body.appendChild(empty);
  } else {
    for (const app of available) {
      const row = document.createElement("div");
      row.className = "lib-row";

      const iconWrap = document.createElement("div");
      iconWrap.className = "lib-icon";
      iconWrap.innerHTML = Fred.getIcon(app.id);   // safe — our own SVG

      const nameEl = document.createElement("span");
      nameEl.className   = "lib-name";
      nameEl.textContent = app.name || app.id;

      const addBtn = document.createElement("button");
      addBtn.className   = "lib-add";
      addBtn.textContent = "+ add";
      // Capture app.id and group in closure — no inline onclick
      addBtn.addEventListener("click", (function (appId, targetGroup) {
        return function () { Fred.addAppToGroup(appId, targetGroup); };
      }(app.id, group)));

      row.appendChild(iconWrap);
      row.appendChild(nameEl);
      row.appendChild(addBtn);
      body.appendChild(row);
    }
  }

  panel.appendChild(body);
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
  document.querySelectorAll(".drop-before, .drop-after")
    .forEach(el => el.classList.remove("drop-before", "drop-after"));
};

Fred.dndOver = function (e, id) {
  if (!Fred.dnd.srcId || Fred.dnd.srcId === id) return;
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  const rect = e.currentTarget.getBoundingClientRect();
  document.querySelectorAll(".drop-before, .drop-after")
    .forEach(el => el.classList.remove("drop-before", "drop-after"));
  const half = rect.top + rect.height / 2;
  e.currentTarget.classList.add(e.clientY < half ? "drop-before" : "drop-after");
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

  const dropAfter = e.currentTarget.classList.contains("drop-after");

  // Remove source from array
  const [srcApp] = apps.splice(srcIdx, 1);

  // Adopt target's group so dragging across sections reassigns the app
  const tgt = apps.find(a => a.id === targetId);
  if (tgt) srcApp.group = tgt.group;

  // Re-insert before or after target
  const newIdx = apps.findIndex(a => a.id === targetId);
  if (newIdx < 0) {
    apps.push(srcApp);
  } else {
    apps.splice(dropAfter ? newIdx + 1 : newIdx, 0, srcApp);
  }

  Fred.renderSidebar();
  Fred.renderMobileGrid();
};