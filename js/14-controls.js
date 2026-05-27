// Sidebar collapse state — persisted per-PC.
Fred.SIDEBAR_KEY = "fred:sidebar-collapsed";

Fred.applySidebarCollapsed = function (collapsed) {
  document.body.classList.toggle("sidebar-collapsed", !!collapsed);
  const btn = document.getElementById("sidebar-collapse");
  if (btn) btn.textContent = collapsed ? "›" : "‹";
};

Fred.toggleSidebarCollapsed = function () {
  if (Fred.state.editMode) return;
  const next = !document.body.classList.contains("sidebar-collapsed");
  Fred.applySidebarCollapsed(next);
  localStorage.setItem(Fred.SIDEBAR_KEY, next ? "1" : "0");
};

Fred.bindControls = function () {
  const wasCollapsed = localStorage.getItem(Fred.SIDEBAR_KEY) === "1";
  Fred.applySidebarCollapsed(wasCollapsed);

  document.getElementById("sidebar-collapse")
    .addEventListener("click", Fred.toggleSidebarCollapsed);

  // Floating button shown only when sidebar is collapsed — brings it back.
  const sidebarOpen = document.getElementById("sidebar-open");
  if (sidebarOpen) sidebarOpen.addEventListener("click", Fred.toggleSidebarCollapsed);

  Fred.el.projectName.addEventListener("click", () => {
    if (Fred.state.editMode) return;
    const next = prompt("Project name:", Fred.state.project.name || "");
    if (next != null) {
      Fred.state.project.name = next.trim() || "untitled project";
      Fred.saveProject(); Fred.renderProjectName(); Fred.broadcastProject();
    }
  });

  document.getElementById("reload-app").addEventListener("click", () => {
    if (!Fred.state.activeId) return;
    Fred.el.frame.src = Fred.el.frame.src;
  });

  document.getElementById("pop-out").addEventListener("click", () => {
    if (!Fred.state.activeId) return;
    const app = Fred.state.apps.find(a => a.id === Fred.state.activeId);
    if (app && app.url) window.open(app.url, "_blank");
  });

  document.getElementById("open-edit").addEventListener("click", () => {
    if (Fred.state.editMode) Fred.saveAndExitEditMode();
    else Fred.enterEditMode();
  });

  const editCancel = document.getElementById("edit-cancel");
  if (editCancel) editCancel.addEventListener("click", Fred.cancelEditMode);

  // Legacy setup view (URL / name editing — not shown in main UI)
  const setupClose   = document.getElementById("setup-close");
  const setupSave    = document.getElementById("setup-save");
  const setupDiscard = document.getElementById("setup-discard");
  if (setupClose)   setupClose.addEventListener("click", Fred.discardSetup);
  if (setupSave)    setupSave.addEventListener("click", Fred.saveSetup);
  if (setupDiscard) setupDiscard.addEventListener("click", Fred.discardSetup);

  const mobileBack = document.getElementById("mobile-back");
  if (mobileBack) mobileBack.addEventListener("click", Fred.goHome);

  const mobileSetupBtn = document.getElementById("mobile-setup-btn");
  if (mobileSetupBtn) mobileSetupBtn.addEventListener("click", () => {
    if (Fred.state.editMode) Fred.saveAndExitEditMode();
    else Fred.enterEditMode();
  });
};