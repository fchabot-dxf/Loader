// Welcome / empty / error screen shown when no app is active.
Fred.showWelcome = function (msg) {
  const w = Fred.el.welcome;
  if (msg) {
    w.innerHTML = "";
    const h = document.createElement("h2"); h.textContent = "no apps yet";
    w.appendChild(h);
    const p = document.createElement("pre"); p.textContent = msg;
    p.style.cssText = "white-space:pre-wrap;font-size:12px;color:#888;max-width:480px;";
    w.appendChild(p);
  }
  Fred.showView("welcome");
};
