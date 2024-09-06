// Rəng elementlərini və düyməni seçirik
const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generate");
const selectedColorsBox = document.getElementById("selected-colors-box");
const selectedColorsContainer = document.getElementById("selected-colors");

// Seçilmiş rəngləri saxlamaq üçün massiv
let selectedColors = [];

// Random rəng generatoru funksiyası
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Dinamik rəng qutuları yaratmaq funksiyası
function generatePalette() {
  palette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    const newColor = generateRandomColor();
    colorBox.style.backgroundColor = newColor;

    const colorCode = document.createElement("p");
    colorCode.classList.add("color-code");
    colorCode.textContent = newColor;
    colorBox.appendChild(colorCode);

    colorBox.addEventListener("click", () =>
      selectColor(i, newColor, colorBox)
    );

    palette.appendChild(colorBox);
  }
}

// Rəng seçmək funksiyası
function selectColor(index, color, box) {
  selectedColorsBox.style.display = "block";

  if (selectedColors.includes(color)) {
    alert("Bu rəng artıq seçilib!");
  } else {
    selectedColors.push(color);

    addSelectedColorToPanel(color);

    document.body.style.background = color;
  }
}

// Seçilmiş rəngləri panelə əlavə edən funksiya
function addSelectedColorToPanel(color) {
  const colorItem = document.createElement("div");
  colorItem.classList.add("selected-color-item");

  const colorCircle = document.createElement("div");
  colorCircle.classList.add("color-circle");
  colorCircle.style.backgroundColor = color;

  const colorCode = document.createElement("p");
  colorCode.classList.add("color-code");
  colorCode.textContent = color;

  colorItem.appendChild(colorCircle);
  colorItem.appendChild(colorCode);

  selectedColorsContainer.appendChild(colorItem);
}

// "Palitra Yarat" düyməsinə klik etdikdə yeni rənglər yaradırıq
generateBtn.addEventListener("click", generatePalette);

// İlk açılışda bir dəfə palitra yaradırıq
generatePalette();
