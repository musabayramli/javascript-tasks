const inpValue = document.querySelector(".form-control");
const button = document.querySelector(".btn");
const demo = document.getElementById("demo");
const error = document.getElementById("error");
let a = demo.innerHTML;

button.addEventListener("click", function () {
  let searchValue = inpValue.value.trim();
  let lowerCaseSearchValue = searchValue.toLowerCase();
  let count = (a.toLowerCase().match(new RegExp(lowerCaseSearchValue, "gi")) || []).length;

  if (searchValue && count > 0) {
    error.innerHTML = `Axtardığınız netice: ${searchValue}<br/> Təkrarlanma sayı: ${count}`;
    demo.innerHTML = a;

    
    demo.innerHTML = demo.innerHTML.replace(new RegExp(`(${searchValue})`, "gi"), function (match) {
      return `<span>${match}</span>`; 
    });

    inpValue.value = "";
  } else if (!searchValue) {
    error.innerHTML = "Input-a bir şeylər yaz !!!";
    demo.innerHTML = a;
  } else {
    demo.innerHTML = a;
    error.innerHTML = `Axtardığınız netice: ${searchValue}<br/> Amma belə bir ifadə yoxdur...`;
    inpValue.value = "";
  }
});
