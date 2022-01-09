var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".btn");

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  
  css.textContent = body.style.background + ";";
}

function getRandomNumber() {
  var color = "#"
  color += Math.random().toString(16).slice(2, 8);
  return color;
}

function randomBackground() {
  color1.value = getRandomNumber();
  color2.value = getRandomNumber();
  setGradient();
}

setGradient();

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

btn.addEventListener("click", randomBackground);