const progressBar = document.querySelectorAll(".progress");
const numberBg = document.querySelectorAll(".number_cont");
const btnPrev = document.querySelector(".previous");
const btnNext = document.querySelector(".next");
const body = document.querySelector("body");
var count = 0;


const stepColors = ['var(--pink)', 'var(--blue)', 'var(--green)', 'var(--yellow)'];

function updateProgress() {
    btnNext.disabled = false;
    btnPrev.disabled = false;
    btnNext.style.backgroundColor = "var(--blue)";
    btnPrev.style.backgroundColor = "var(--blue)";
    

    progressBar.forEach((stick, index) => {
        stick.style.width = "0%";
        stick.style.backgroundColor = stepColors[count]; 
    });
    for (let i = 0; i < count; i++) {
        progressBar[i].style.width = "100%";
    }
    
    if (count == progressBar.length) {
        btnNext.style.backgroundColor = "var(--passive)";
        btnNext.disabled = true;
    }
    
    if (count == 0) {
        btnPrev.style.backgroundColor = "var(--passive)";
        btnPrev.disabled = true;
    }

    numberBg.forEach(bg => {
        bg.style.backgroundColor = "var(--passive)";
    });
    
    for (let j = 0; j <= count; j++) {
        numberBg[j].style.backgroundColor = stepColors[j];
    }
   
    body.style.backgroundColor = stepColors[count];
}

updateProgress();

btnPrev.addEventListener("click", () => {
    if (count > 0) {
        count--;
    } else {
        count = 0;
    }
    updateProgress();
});

btnNext.addEventListener("click", () => {
    if (count < progressBar.length) {
        count++;
    } else {
        count = progressBar.length;
    }
    updateProgress();
});
