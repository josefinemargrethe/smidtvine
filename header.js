"use strict";

//Dropdown menu fundet på https://www.w3schools.com/howto/howto_js_dropdown.asp
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

//Burgermenu åben og luk
function openNav() {
  document.querySelector("#myNav").style.width = "100%";
  document.querySelector("body").classList.add("no-scroll");
}

function closeNav() {
  document.querySelector("#myNav").style.width = "0%";
  document.querySelector("body").classList.remove("no-scroll");
}
