// Open an app in the iframe.
Fred.openApp = function (id) {
  const app = Fred.state.apps.find(a => a.id === id);
  if (!app) return;
  if (!app.url) {
    Fred.showWelcome('No URL for "' + (app.name || app.id) + '". Open setup to add one.');
    return;
  }
  Fred.closeSetup();
  Fred.state.activeId = id;
  localStorage.setItem(Fred.LAST_APP_KEY, id);
  for (const el of document.querySelectorAll(".app-item")) {
    el.classList.toggle("active", el.dataset.appId === id);
  }

  Fred.showView("frame");
  Fred.el.frame.src = app.url;
  Fred.el.frame.onload = () => Fred.sendHandshake(app);

  if (Fred.isMobile()) {
    document.body.classList.add("mobile-app-open");
    if (Fred.el.mobileName) Fred.el.mobileName.textContent = app.name || app.id;
  } else {
    if (!document.body.classList.contains("sidebar-collapsed")) {
      Fred.applySidebarCollapsed(true);
      localStorage.setItem(Fred.SIDEBAR_KEY, "1");
    }
  }
};
