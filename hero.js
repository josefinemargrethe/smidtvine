"use strict";
let info = [];

document.addEventListener("DOMContentLoaded", start);

function start() {
  hentJson();

  async function hentJson() {
    let url = "https://josefinemargrethe.dk/kea/4-semester/smidtvine/wordpress/wp-json/wp/v2/forside/135";
    let jsonData = await fetch(url);

    info = await jsonData.json();

    visData();
  }

  function visData() {
    console.log(info);
    document.querySelector(".hero").innerHTML = `
    <source media="(min-width: 1350px) and (orientation: landscape)" srcset="${info.desktop_large_image.guid}" />
          <source media="(min-width: 1025px) and (orientation: landscape)" srcset="${info.desktop_image.guid}" />
          <source media="(min-width: 813px) and (orientation: landscape)" srcset="${info.tablet_landscape_image.guid}" />
          <source media="(min-width: 628px) and (orientation: portrait)" srcset="${info.tablet_portrait_image.guid}" />
          <source media="(min-width: 450px) and (orientation: landscape)" srcset="${info.mobile_landscape_image.guid}" />
          <img src="${info.mobile_portrait_image.guid}" alt="${info.tablet_landscape_image.post_title}" />`;

    document.querySelector(".byline").innerHTML = info.forside_byline;
  }
  hentJson();
}
