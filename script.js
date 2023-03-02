const panels = document.querySelectorAll(".panel");

// Creer boucle foreach pour qu'à chaque click, cela ajoute et retire les classes sur le target mais aussi sur les autres elements
// Pour que les classes ajouter ne soient que sur 1 element à la fois.

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    for (let panel of panels) {
      if (panel.classList.contains("click-panel", "click-h3")) {
        panel.classList.remove("click-panel", "click-h3");
      } else if (e.target.classList.contains("click-panel", "click-h3")) {
        e.target.classList.remove("click-panel", "click-h3");
      } else {
        e.target.classList.add("click-panel", "click-h3");
      }
    }
  });
});
