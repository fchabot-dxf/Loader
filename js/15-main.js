// Boot — runs after DOM is ready.
document.addEventListener("DOMContentLoaded", async () => {
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
