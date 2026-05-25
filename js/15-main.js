// Boot — runs after DOM is ready.
document.addEventListener("DOMContentLoaded", async () => {
  // Cache frequently-used DOM refs so modules don't repeat getElementById.
  Fred.el = {
    frame:       document.getElementById("app-frame"),
    welcome:     document.getElementById("welcome"),
    setup:       document.getElementById("setup-view"),
    appList:     document.getElementById("app-list"),
    mobileGrid:  document.getElementById("mobile-grid"),
    mobileName:  document.getElementById("mobile-appname"),
    projectName: document.getElementById("project-name"),
  };

  // Single place that controls which of the three main panels is visible.
  Fred.showView = function (view) {
    Fred.el.welcome.hidden = (view !== "welcome");
    Fred.el.frame.hidden   = (view !== "frame");
    Fred.el.setup.hidden   = (view !== "setup");
  };

  Fred.state.project = Fred.loadProject();
  Fred.bindControls();
  Fred.state.apps = await Fred.loadApps();
  Fred.renderSidebar();
  Fred.renderMobileGrid();
  Fred.renderProjectName();
  const last = localStorage.getItem(Fred.LAST_APP_KEY);
  if (last && Fred.state.apps.find(a => a.id === last && !a.hidden)) {
    Fred.openApp(last);
  }
});
