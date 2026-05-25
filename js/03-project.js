// Project state (just a name for now; future: drawing files, settings).
Fred.loadProject = function () {
  try {
    const raw = localStorage.getItem(Fred.PROJECT_KEY);
    return raw ? JSON.parse(raw) : { name: "untitled project" };
  } catch { return { name: "untitled project" }; }
};
Fred.saveProject = function () {
  try { localStorage.setItem(Fred.PROJECT_KEY, JSON.stringify(Fred.state.project)); } catch {}
};
Fred.renderProjectName = function () {
  Fred.el.projectName.textContent = Fred.state.project.name || "untitled project";
};
