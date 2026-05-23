// Bind sidebar footer buttons + project-name rename.
Fred.bindControls = function () {
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
};
