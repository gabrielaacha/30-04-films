const ul = document.querySelector(".filmList");

function pinkBor() {
  this.style.borderBottom = "1px pink solid";
}

function noBor() {
  this.style.border = "transparent";
}

function pinkCol() {
  this.style.backgroundColor = "pink";
}

function noCol() {
  this.style.backgroundColor = "transparent";
}

let changeLi = document.querySelectorAll(".filmPoster");
changeLi.forEach((li) => {
  li.addEventListener("mouseover", pinkBor);
  li.addEventListener("mouseleave", noBor);
  li.addEventListener("click", noCol);
  li.addEventListener("click", pinkCol);
});

ul.addEventListener("click", (e) => {
  [...document.querySelectorAll(".filmInfo")].map((film) => {
    film.style.display = "none";
  });

  document.querySelector(`#${e.target.id}Info`).style = "display:flex";
});
