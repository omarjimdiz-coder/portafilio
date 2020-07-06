"use strict";
const d = document,
  w = window;

const scrollBtn = document.querySelector(".scroll-top-btn");

w.addEventListener("scroll", (e) => {
  let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

  if (scrollTop > 200) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

scrollBtn.addEventListener("click", (e) => {
  if (e.target.matches(".scroll-top-btn")) {
    w.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }
});
