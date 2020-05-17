window.addEventListener("DOMContentLoaded", loadJSON);

function loadJSON() {
  fetch("https://josefinemargrethe.dk/kea/4-semester/smidtvine/wordpress/wp-json/wp/v2/forside")
    .then((response) => response.json())
    .then((jsonData) => {
      //når JSON er loadet tager vi vores data med videre til prepareData
      showData(jsonData);
    });
}

function showData(jsonData) {
  // we are clearing the list
  document.querySelector(".index_content").innerHTML = "";

  // we are building a new list
  jsonData.forEach(displayData);
}

function displayData(jsonData) {
  // create clone
  const clone = document.querySelector("template").content.cloneNode(true);

  // set clone data
  clone.querySelector(".index_text").innerHTML = jsonData.forside_tekst1;
  clone.querySelector(".index_image").innerHTML = `<img src="${jsonData.forside_billede1.guid}" alt="${jsonData.forside_billede1.post_title}" class="para_image">`;

  document.querySelector(".index_content").appendChild(clone);
  scrollLoop();
}

function scrollLoop(e) {
  let para = document.querySelector(".para_image");

  let yScrollPosition;

  yScrollPosition = window.scrollY;

  setTranslate(0, yScrollPosition * 0.08, para);

  requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(0, ${yPos}px, 0)`;
}
