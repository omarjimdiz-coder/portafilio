"use strict";

const ThemeBtn = document.querySelector(".dark-theme-btn"),
  selectors = document.querySelectorAll("[dark-theme]");

console.log(selectors);

let moon = "🌙",
  sun = "☀️";

ThemeBtn.addEventListener("click", (e) => {
  if (e.target.matches(".dark-theme-btn")) {
    console.log(ThemeBtn.textContent);
    if (ThemeBtn.textContent === moon) {
      selectors.forEach((el) => el.classList.add("dark-mode"));
      ThemeBtn.textContent = sun;
    } else {
      selectors.forEach((el) => el.classList.remove("dark-mode"));
      ThemeBtn.textContent = moon;
    }
  }
});
