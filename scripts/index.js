const redCol = () => {
  this.style.backgroundColor = "red";
};

const noCol = () => {
  this.style.backgroundColor = "transparent";
};

let changeLi = document.querySelector(".filmPoster");
changeLi.addEventListener("mouseover", redCol);
changeLi.addEventListener("mouseleave", noCol);
changeLi.addEventListener("onclick");
