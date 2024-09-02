const color = document.querySelector(".color");
const button = document.querySelector(".btn");
const spanColor = document.querySelector(".spanColor");

document.addEventListener("DOMContentLoaded", function () {
  const initialColor = "#8a2be2";
  document.body.style.backgroundColor = initialColor;
  spanColor.style.width = "25px";
  spanColor.style.height = "25px";
  spanColor.style.backgroundColor = initialColor;
});

button.addEventListener("click", function () {
  document.body.style.backgroundColor = color.value;
  spanColor.style.width = "25px";
  spanColor.style.height = "25px";
  spanColor.style.backgroundColor = color.value;
  color.value = "";
});
