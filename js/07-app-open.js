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
};
