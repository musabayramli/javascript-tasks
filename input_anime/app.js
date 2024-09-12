// Təsadüfi rəng generatoru
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


setInterval(() => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
}, 2000);

// Label animasiyası üçün mövcud kod
const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(function (value, index) {
      return `<span style="transition-delay: ${index * 50}ms">${value}</span>`;
    })
    .join("");
});
