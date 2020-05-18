"use strict";

window.addEventListener("DOMContentLoaded", loadJSON);

function loadJSON() {
  fetch("https://josefinemargrethe.dk/kea/4-semester/smidtvine/wordpress/wp-json/wp/v2/specialiteter?per_page=100")
    .then((response) => response.json())
    .then((specialiteter) => {
      //når JSON er loadet tager vi vores data med videre til prepareData
      showData(specialiteter);
    });
}

function showData(specialiteter) {
  // we are clearing the list
  document.querySelector(".wines").innerHTML = "";

  // we are building a new list
  specialiteter.forEach(displayData);
}

function displayData(specialiteter) {
  // create clone
  const clone = document.querySelector("template").content.cloneNode(true);

  // set clone data
  clone.querySelector(".wine_image").innerHTML = `<img src="${specialiteter.specialitet_billede.guid}" alt="${specialiteter.specialitet_billede.post_title}">`;
  clone.querySelector(".wine_name").innerHTML = specialiteter.specialitet_navn;
  clone.querySelector(".wine_description").innerHTML = specialiteter.kort_beskrivelse;

  if (specialiteter.udsolgt == "ja") {
    clone.querySelector(".wine_price_six").innerHTML = `${specialiteter.specialitet_navn} er desværre mildertidigt udsolgt!`;
    clone.querySelector(".wine_price_six").style.color = "rgb(192, 98, 98)";
  } else {
    clone.querySelector(".wine_price_six").innerHTML = `<b><p>Pris: ${specialiteter.specialitet_pris} kr.</p></b>`;

    if (specialiteter.flerstykspris != "") {
      clone.querySelector(".wine_price").innerHTML = `<p>Tag 4 glas for ${specialiteter.flerstykspris} kr.</p>`;
    }
  }

  let theme = specialiteter.type;
  clone.querySelector(".readmore").setAttribute("data-theme", theme);

  document.querySelector(".wines").appendChild(clone);

  //   let wineCategory = vine.wine_type;
  //   styleButton(wineCategory);

  //   function styleButton(wineCategory) {
  //     const redWine = "#4c0405";
  //     const whiteWine = "#f3de07";
  //     const roseWine = "#0b304a";
  //     const smagekasse = "#234723";

  //     document.querySelectorAll(".wines").forEach((wineCategory) => {
  //       if (wineCategory == "redwine") {
  //         document.querySelector(".readmore").style.backgroundColor = redWine;
  //       } else if (wineCategory == "whitewine") {
  //         document.querySelector(".readmore").style.backgroundColor = whiteWine;
  //       } else if (wineCategory == "rosewine") {
  //         document.querySelector(".readmore").style.backgroundColor = roseWine;
  //       } else if (wineCategory == "smagekasse") {
  //         document.querySelector(".readmore").style.backgroundColor = smagekasse;
  //       }
  //     });

  // if (wineCategory == "redwine") {
  //   document.querySelector(".readmore").style.backgroundColor = redWine;
  // } else if (wineCategory == "whitewine") {
  //   document.querySelector(".readmore").style.backgroundColor = whiteWine;
  // } else if (wineCategory == "rosewine") {
  //   document.querySelector(".readmore").style.backgroundColor = roseWine;
  // } else if (wineCategory == "smagekasse") {
  //   document.querySelector(".readmore").style.backgroundColor = smagekasse;
  // }
  //   }

  //   let wineCategory = vine.wine_type;
  //   styleButton(wineCategory);

  // vine.forEach(styleButton(wineCategory));

  document.querySelector(".wines").lastElementChild.addEventListener("click", () => {
    location.href = "specialitet.html?id=" + specialiteter.id;
    //her vil browseren hente siden product.html, og den vil desuden give siden en variabel,x, som er lig med item.id.
  });
}

// function styleButton(wineCategory) {
//   console.log(wineCategory);
//   let theme = wineCategory;
//   document.querySelector(".readmore").setAttribute("data-theme", theme);
// }
