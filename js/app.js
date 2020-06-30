//Menu hamburguesa

let panelBtn = document.querySelector(".panel-btn");
let panel = document.querySelector(".panel");

panelBtn.addEventListener("click", (e) => {
  panel.classList.toggle("is-active");
  panelBtn.classList.toggle("is-active");
});
