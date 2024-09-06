document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const dropdown = document.querySelector(".dropdown"); // dropdown elementinə aktivlik tətbiq edəcəyik
    const dropdownContent = document.querySelector(".dropdown-content");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownItems = document.querySelectorAll(".dropdown-content li");

    // Burger menyusu üçün click hadisəsi
    burger.addEventListener("click", () => {
      menu.classList.toggle("active");
      burger.classList.toggle("toggle");
    });

    // Dropdown click funksiyası
    const handleDropdownClick = (event) => {
      event.preventDefault();
      dropdown.classList.toggle("active"); // dropdown-a `active` sinfi əlavə edirik
      if (dropdown.classList.contains("active")) {
        dropdownContent.style.display = "block"; // Açmaq üçün
      } else {
        dropdownContent.style.display = "none"; // Bağlamaq üçün
      }
    };

    // İçərisindəki `li`-lərə klik edildikdə dropdown-u bağlamaq üçün
    dropdownItems.forEach((item) => {
      item.addEventListener("click", () => {
        dropdown.classList.remove("active");
        dropdownContent.style.display = "none"; // Dropdown bağlansın
      });
    });

    let dropdownIsActive = false; // Dropdown event aktiv olub olmadığını yoxlamaq üçün dəyişən

    const applyDropdownForMobile = () => {
      if (window.innerWidth <= 768) {
        if (!dropdownIsActive) {
          dropdownToggle.addEventListener("click", handleDropdownClick);
          dropdownIsActive = true; // Event əlavə olunduqda işarələnir
        }
      } else {
        if (dropdownIsActive) {
          dropdownToggle.removeEventListener("click", handleDropdownClick);
          dropdown.classList.remove("active"); // Pəncərə dəyişdikdə dropdown bağlansın
          dropdownContent.style.display = "none"; // Dropdown bağlansın
          dropdownIsActive = false; // Event silindikdə işarələnir
        }
      }
    };

    // İlk dəfə pəncərə ölçüsünə görə funksiyanı işə salırıq
    applyDropdownForMobile();

    // Pəncərə ölçüsü dəyişdikdə də funksiyanı işə salırıq
    window.addEventListener("resize", applyDropdownForMobile);
});

// Random rənglər yaratmaq üçün funksiya
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Gradient rəngləri dəyişmək üçün funksiya
function changeGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();
  document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2}, ${color3})`;
  document.body.style.backgroundSize = "400% 400%";
}

// Hər 4 saniyədə bir yeni gradient rəngləri təyin olunur
setInterval(changeGradient, 4000);
