const ad = document.querySelector("#ad");
const soyad = document.querySelector("#soyad");
const mail = document.querySelector("#mail");
const button = document.querySelector("button");
const table = document.querySelector("table tbody");
const adError = document.querySelector("#adError");
const soyadError = document.querySelector("#soyadError");
const mailError = document.querySelector("#mailError");

function Student(name, surname, mail) {
  this.name = name;
  this.surname = surname;
  this.mail = mail;
}

let studentData = [];

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (validateInputs()) {
    const studentInfo = new Student(ad.value, soyad.value, mail.value);
    studentData.push(studentInfo);
    showData(studentData);
    cleaning();
  }
});

function validateInputs() {
  let isValid = true;
  adError.textContent = "";
  soyadError.textContent = "";
  mailError.textContent = "";

  // Adın ən azı 3 hərfdən ibarət olması
  if (ad.value.trim().length < 3) {
    adError.textContent = "Ad ən azı 3 hərfdən ibarət olmalıdır.";
    isValid = false;
  }

  // Soyad boş olmamalıdır
  if (soyad.value.trim() === "") {
    soyadError.textContent = "Soyad boş ola bilməz.";
    isValid = false;
  }

  // Email formatını yoxlamaq
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(mail.value.trim())) {
    mailError.textContent = "Düzgün e-mail daxil edin.";
    isValid = false;
  }

  return isValid;
}

function showData(array) {
  let kod = "";
  for (let i = 0; i < array.length; i++) {
    kod += `
      <tr>
        <td>${i + 1}</td>
        <td>${array[i].name}</td>
        <td>${array[i].surname}</td>
        <td>${array[i].mail}</td>
      </tr>`;
  }
  table.innerHTML = kod;
}

function cleaning() {
  ad.value = soyad.value = mail.value = "";
}
