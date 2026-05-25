// Push the current project state into the active app.
Fred.broadcastProject = function () {
  if (!Fred.el.frame.contentWindow) return;
  Fred.el.frame.contentWindow.postMessage(
    { protocol: Fred.PROTOCOL, type: "project-update", project: Fred.state.project },
    "*"
  );
};

// Return to the home / grid view.
Fred.goHome = function () {
  Fred.state.activeId = null;
  localStorage.removeItem(Fred.LAST_APP_KEY);
  Fred.el.frame.hidden = true;
  Fred.el.frame.src = "about:blank";
  for (const el of document.querySelectorAll(".app-item.active")) el.classList.remove("active");
  if (Fred.isMobile()) {
    document.body.classList.remove("mobile-app-open");
  } else {
    Fred.showView("welcome");
  }
};
