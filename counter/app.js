const counters = document.querySelectorAll(".counters");

counters.forEach(count => {
    count.innerText = "0";

    const updateCounter = () => {
        const target = Number(count.getAttribute("data-target"));
        console.log(target);
        const speed = Math.ceil(target / 300);

        const c = +count.innerText;

        if (c < target) {
            count.innerText = `${Number(c + speed)}`;
            setTimeout(updateCounter, 1);
        } else {
            count.innerText = target;
        }

    }
    updateCounter();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function updateBodyGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();

    document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
}


function updateIconBackgrounds() {
    const icons = document.querySelectorAll('i');
    
    icons.forEach(icon => {
        const iconColor1 = getRandomColor();
        const iconColor2 = getRandomColor();
        
        icon.style.background = `linear-gradient(135deg, ${iconColor1}, ${iconColor2})`;
    });
}


setInterval(() => {
    updateBodyGradient();
    updateIconBackgrounds();
}, 2000);


updateBodyGradient();
updateIconBackgrounds();
