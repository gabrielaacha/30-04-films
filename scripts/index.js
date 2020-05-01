const ul = document.querySelector(".filmList");

function pinkCol() {
  this.style.backgroundColor = "pink";
}

function noCol() {
  this.style.backgroundColor = "transparent";
}

function redCol() {
  this.style.backgroundColor = "red";
  //   filmInfoHide.style.display = "none";
  //   filmInfoShow.style.display = "block";
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

  document.querySelector(`#${e.target.id}Info`).style.display = "block";
  document.querySelector(`#${e.target.id}Info`).style.justifyContent = "center";
});

// let filmInfoHide = document.querySelector("#personaImg");
// let filmInfoHide = document.querySelectorAll(".filmInfo");
// filmInfoHide.forEach((sec) => {
//   sec.addEventListener("click", redCol);
// });
// let filmInfoShow = document.getElementById("personaImg");
// let filmInfoShow = document.querySelector("#personaInfo");
