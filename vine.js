"use strict";

window.addEventListener("DOMContentLoaded", loadJSON);

function loadJSON() {
  fetch("https://josefinemargrethe.dk/kea/4-semester/smidtvine/wordpress/wp-json/wp/v2/vine?per_page=100")
    .then((response) => response.json())
    .then((vine) => {
      //når JSON er loadet tager vi vores data med videre til prepareData
      showData(vine);
    });
}

function showData(vine) {
  // we are clearing the list
  document.querySelector(".wines").innerHTML = "";

  // we are building a new list
  vine.forEach(displayData);
}

function displayData(vine) {
  // create clone
  const clone = document.querySelector("template").content.cloneNode(true);

  // set clone data
  clone.querySelector(".wine_image").innerHTML = `<img src="${vine.vin_billede.guid}" alt="${vine.vin_billede.post_title}">`;
  clone.querySelector(".wine_name").innerHTML = vine.vin_navn;
  clone.querySelector(".wine_description").innerHTML = vine.kort_beskrivelse;

  if (vine.udsolgt == "ja") {
    clone.querySelector(".wine_price_six").innerHTML = `${vine.vin_navn} er desværre mildertidigt udsolgt!`;
    clone.querySelector(".wine_price_six").style.color = "rgb(192, 98, 98)";
  } else {
    clone.querySelector(".wine_price_six").innerHTML = `<b><p>Pris: ${vine.pris_6flasker} kr. ved køb af 6 flasker</p></b>`;

    if (vine.pris_enkeltstyk != "") {
      clone.querySelector(".wine_price").innerHTML = `<p>Ellers ${vine.pris_enkeltstyk} kr. pr. flaske</p>`;
    }
  }

  let theme = vine.vin_type;
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
    location.href = "vin.html?id=" + vine.id;
    //her vil browseren hente siden product.html, og den vil desuden give siden en variabel,x, som er lig med item.id.
  });
}

// function styleButton(wineCategory) {
//   console.log(wineCategory);
//   let theme = vine.vin_type;
//   document.querySelector(".readmore").setAttribute("data-theme", theme);
// }
