"use strict";

window.addEventListener("DOMContentLoaded", intersectFunction);

function intersectFunction() {
  const images = document.querySelectorAll(".pop_up");

  const config = {
    root: null,
    rootMargin: "0px",
    threshold: [0, 0.25, 0.75],
  };

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("visible");
        entry.target.style.animation = `pop_up_anim 1s ${entry.target.dataset.delay} forwards ease-out`;
      } else {
        entry.target.style.animation = "none";
        entry.target.classList.remove("visible");
        entry.target.classList.add("unvisible");
      }
    });
  }, config);

  images.forEach((image) => {
    observer.observe(image);
  });
}
