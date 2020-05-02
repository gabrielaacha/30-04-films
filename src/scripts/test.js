//DOM element
const filmList = document.querySelector(".filmList");

const newUl = [
  "Persona",
  "Suspiria",
  "Groundhog's Day",
  "Alien",
  "Meaning of Life",
].reduce((acc, a) => acc + `<li class="filmPoster" id="${a}">${a}</li>`, "");

filmList.innerHTML = newUl;

const ul = document.querySelector(".filmList");

function pinkCol() {
  this.style.backgroundColor = "pink";
}

function noCol() {
  this.style.backgroundColor = "transparent";
}

function redCol() {
  this.style.backgroundColor = "red";
}

let changeLi = document.querySelectorAll(".filmPoster");
changeLi.forEach((li) => {
  li.addEventListener("mouseover", pinkCol);
  li.addEventListener("mouseleave", noCol);
  li.addEventListener("click", redCol);
});

ul.addEventListener("click", (e) => {
  [...document.querySelectorAll(".filmInfo")].map((film) => {
    film.style.display = "none";
  });

  document.querySelector(`#${e.target.id}Info`).style = "display:flex";
});
