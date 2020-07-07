"use strict";

const ThemeBtn = document.querySelector(".dark-theme-btn"),
  selectors = document.querySelectorAll("[dark-theme]");

//console.log(selectors);

let moon = "🌙",
  sun = "☀️";

const lightTheme = () => {
  selectors.forEach((el) => el.classList.remove("dark-mode"));
  ThemeBtn.textContent = moon;
  localStorage.setItem("theme", "light");
};

const darkTheme = () => {
  selectors.forEach((el) => el.classList.add("dark-mode"));
  ThemeBtn.textContent = sun;
  localStorage.setItem("theme", "dark");
};

ThemeBtn.addEventListener("click", (e) => {
  if (e.target.matches(".dark-theme-btn")) {
    //console.log(ThemeBtn.textContent);
    if (ThemeBtn.textContent === moon) {
      darkTheme();
    } else {
      lightTheme();
    }
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.log(localStorage.getItem("theme"));
  if (localStorage.getItem("theme") === null) ls.setItem("theme", "light");
  if (localStorage.getItem("theme") === "light") lightTheme();
  if (localStorage.getItem("theme") === "dark") darkTheme();
});
