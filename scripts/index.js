function pinkCol() {
  this.style.backgroundColor = "pink";
}

function noCol() {
  this.style.backgroundColor = "transparent";
}

function redCol() {
  this.style.backgroundColor = "red";
  filmInfoHide.style.display = "none";
  //   filmInfoShow.style.display = "block";
}

let changeLi = document.querySelectorAll(".filmPoster");
changeLi.forEach((li) => {
  li.addEventListener("mouseover", pinkCol);
  li.addEventListener("mouseleave", noCol);
  li.addEventListener("click", redCol);
});

let filmInfoHide = document.querySelectorAll(".filmInfo");
// let filmInfoShow = document.getElementById("personaImg");
