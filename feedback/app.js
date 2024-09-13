const hearts = document.querySelectorAll(".heart i");
const btn = document.querySelector("button");
const warningMessage = document.querySelector(".warning-message");
let feedback = 0;

hearts.forEach(heart => {
    heart.addEventListener("mouseenter", handleHover);
    heart.addEventListener("click", handleClick);
});

function handleHover(e) {
    const id = parseInt(e.target.dataset.id);
    resetHearts();
    for (let i = 0; i < id; i++) {
        hearts[i].classList.add('active');
    }
}

function handleClick(e) {
    feedback = parseInt(e.target.dataset.id);
    resetHearts();
    for (let i = 0; i < feedback; i++) {
        hearts[i].classList.add('active');
    }
}

function resetHearts() {
    hearts.forEach(heart => heart.classList.remove('active'));
}

btn.addEventListener("click", () => {
    if (feedback === 0) {
        warningMessage.style.opacity = "1";
    } else {
        document.querySelector(".feedback-container").innerHTML = `
            <h1>Your feedback rating is ${feedback}/5</h1>
        `;
    }
});
