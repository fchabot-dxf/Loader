// Push the current project state into the active app, and the go-home action.
Fred.broadcastProject = function () {
  const frame = document.getElementById("app-frame");
  if (!frame.contentWindow) return;
  frame.contentWindow.postMessage(
    { protocol: Fred.PROTOCOL, type: "project-update", project: Fred.state.project },
    "*"
  );
};

Fred.goHome = function () {
  Fred.state.activeId = null;
  localStorage.removeItem(Fred.LAST_APP_KEY);
  const frame = document.getElementById("app-frame");
  frame.hidden = true;
  frame.src = "about:blank";
  document.getElementById("welcome").hidden = false;
  for (const el of document.querySelectorAll(".app-item.active")) el.classList.remove("active");
};
