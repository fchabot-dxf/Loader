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

  const frame = document.getElementById("app-frame");
  document.getElementById("welcome").hidden = true;
  frame.hidden = false;
  frame.src = app.url;
  frame.onload = () => Fred.sendHandshake(app);

  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    // Slide grid off, show slim top bar
    document.body.classList.add("mobile-app-open");
    const nameEl = document.getElementById("mobile-appname");
    if (nameEl) nameEl.textContent = app.name || app.id;
  } else {
    // Auto-collapse sidebar to icon strip on desktop
    if (!document.body.classList.contains("sidebar-collapsed")) {
      Fred.applySidebarCollapsed(true);
      localStorage.setItem(Fred.SIDEBAR_KEY, "1");
    }
  }
};
