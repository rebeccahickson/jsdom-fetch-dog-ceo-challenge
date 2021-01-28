document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((json) => showImages(json));
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((json) => showBreeds(json));
  document.getElementById("breed-dropdown").onchange = filterBreeds;
});

function showImages(input) {
  arr = input["message"];
  arr.forEach((imgLink) => {
    document.getElementById(
      "dog-image-container"
    ).innerHTML += `<img width="200px" height="200px" src=${imgLink}>`;
  });
}

function showBreeds(input) {
  let arr = Object.keys(input["message"]);
  arr.forEach((breed) => {
    document.getElementById(
      "dog-breeds"
    ).innerHTML += `<li id="${breed}">${breed}</li>`;
  });
  document
    .getElementById("dog-breeds")
    .addEventListener("click", function (event) {
      event.target.style.color = "red";
    });
}

function filterBreeds() {
  let letter = document.getElementById("breed-dropdown").value;
  document.querySelectorAll("ul#dog-breeds li").forEach((breed) => {
    breed.style.display = "list-item";
    if (breed.id[0] != letter) {
      breed.style.display = "none";
    }
  });
}
