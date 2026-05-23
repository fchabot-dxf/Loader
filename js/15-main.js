// Boot — runs after DOM is ready. Initializes state from localStorage,
// fetches the registry, renders the sidebar, restores the last app.
document.addEventListener("DOMContentLoaded", async () => {
  Fred.state.pinned = Fred.loadPinned();
  Fred.state.project = Fred.loadProject();
  Fred.bindControls();
  Fred.state.apps = await Fred.loadApps();
  Fred.renderSidebar();
  Fred.renderProjectName();
  const last = localStorage.getItem(Fred.LAST_APP_KEY);
  if (last && Fred.isPinned(last) && Fred.state.apps.find(a => a.id === last)) {
    Fred.openApp(last);
  }
});
