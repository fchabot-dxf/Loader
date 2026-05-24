// Sidebar collapse state — persisted per-PC.
Fred.SIDEBAR_KEY = "fred:sidebar-collapsed";

Fred.applySidebarCollapsed = function (collapsed) {
  document.body.classList.toggle("sidebar-collapsed", !!collapsed);
  const btn = document.getElementById("sidebar-collapse");
  if (btn) btn.textContent = collapsed ? "›" : "‹";
};

Fred.toggleSidebarCollapsed = function () {
  const next = !document.body.classList.contains("sidebar-collapsed");
  Fred.applySidebarCollapsed(next);
  localStorage.setItem(Fred.SIDEBAR_KEY, next ? "1" : "0");
};

// Bind sidebar controls + project-name rename + footer buttons.
Fred.bindControls = function () {
  // Restore sidebar state on boot.
  const wasCollapsed = localStorage.getItem(Fred.SIDEBAR_KEY) === "1";
  Fred.applySidebarCollapsed(wasCollapsed);

  // Single toggle button (‹ / ›)
  document.getElementById("sidebar-collapse").addEventListener("click", Fred.toggleSidebarCollapsed);

  document.getElementById("project-name").addEventListener("click", () => {
    const next = prompt("Project name:", Fred.state.project.name || "");
    if (next != null) {
      Fred.state.project.name = next.trim() || "untitled project";
      Fred.saveProject(); Fred.renderProjectName(); Fred.broadcastProject();
    }
  });

  document.getElementById("reload-app").addEventListener("click", () => {
    if (!Fred.state.activeId) return;
    const frame = document.getElementById("app-frame");
    frame.src = frame.src;
  });

  document.getElementById("pop-out").addEventListener("click", () => {
    if (!Fred.state.activeId) return;
    const app = Fred.state.apps.find(a => a.id === Fred.state.activeId);
    if (app && app.url) window.open(app.url, "_blank");
  });

  document.getElementById("open-setup").addEventListener("click", Fred.openSetup);
  document.getElementById("setup-close").addEventListener("click", Fred.discardSetup);
  document.getElementById("setup-save").addEventListener("click", Fred.saveSetup);
  document.getElementById("setup-discard").addEventListener("click", Fred.discardSetup);

  // Mobile: back button + setup shortcut
  const mobileBack = document.getElementById("mobile-back");
  if (mobileBack) mobileBack.addEventListener("click", Fred.goHome);

  const mobileSetupBtn = document.getElementById("mobile-setup-btn");
  if (mobileSetupBtn) mobileSetupBtn.addEventListener("click", Fred.openSetup);
};
