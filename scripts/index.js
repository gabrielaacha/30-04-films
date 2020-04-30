const pinkCol = () => {
  this.style.backgroundColor = "pink";
};

const noCol = () => {
  this.style.backgroundColor = "transparent";
};

const redCol = () => {
  this.style.backgroundColor = "red";
};

let changeLi = document.querySelector(".filmPoster");
changeLi.addEventListener("mouseover", pinkCol);
changeLi.addEventListener("mouseleave", noCol);
changeLi.addEventListener("onclick", redCol);
