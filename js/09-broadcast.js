// Push the current project state into the active app.
Fred.broadcastProject = function () {
  const frame = document.getElementById("app-frame");
  if (!frame.contentWindow) return;
  frame.contentWindow.postMessage(
    { protocol: Fred.PROTOCOL, type: "project-update", project: Fred.state.project },
    "*"
  );
};

// Return to the home / grid view.
Fred.goHome = function () {
  Fred.state.activeId = null;
  localStorage.removeItem(Fred.LAST_APP_KEY);
  const frame = document.getElementById("app-frame");
  frame.hidden = true;
  frame.src = "about:blank";
  for (const el of document.querySelectorAll(".app-item.active")) el.classList.remove("active");

  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    // Slide grid back in, hide top bar
    document.body.classList.remove("mobile-app-open");
  } else {
    document.getElementById("welcome").hidden = false;
  }
};
