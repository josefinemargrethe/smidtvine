"use strict";
let info = [];

document.addEventListener("DOMContentLoaded", start);

function start() {
  hentJson();

  async function hentJson() {
    let url = "https://josefinemargrethe.dk/kea/4-semester/smidtvine/wordpress/wp-json/wp/v2/kontakt/170";
    let jsonData = await fetch(url);

    info = await jsonData.json();

    visData();
  }

  function visData() {
    console.log(info);
    document.querySelector(".fragt_info").innerHTML = info.kontakt_info;
  }
  hentJson();
}
