"use strict";
let fragt = [];

document.addEventListener("DOMContentLoaded", start);

function start() {
  hentJson();

  async function hentJson() {
    let url = "https://josefinemargrethe.dk/kea/4-semester/smidtvine/wordpress/wp-json/wp/v2/kontakt/170";
    let jsonData = await fetch(url);

    fragt = await jsonData.json();

    visData();
  }

  function visData() {
    document.querySelector(".fragt_info").innerHTML = fragt.kontakt_info;
  }
  hentJson();
}
