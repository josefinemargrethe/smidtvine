"use strict";
// const mq = window.matchMedia("(min-width: 800)");

// // When the user scrolls down 70px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   console.log("Scroll funtion");
//   if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
//     document.querySelector("#desktop_nav").classList.add("show");
//     document.querySelector("#desktop_nav").classList.remove("hide");
//     document.querySelector("#desktop_nav").classList.remove("desktop_nav");
//     document.querySelector("#desktop_nav").style.display = "flex";
//   } else {
//     document.querySelector("#desktop_nav").classList.add("hide");
//     document.querySelector("#desktop_nav").classList.remove("show");
//   }
// }
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.querySelector("#myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.querySelector(".dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function openNav() {
  document.querySelector("#myNav").style.width = "100%";
}

function closeNav() {
  document.querySelector("#myNav").style.width = "0%";
}
