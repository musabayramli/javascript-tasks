
// Şifrəni açıb-bağlama funksiyası
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const passwordToggle = document.querySelector('.password-toggle');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordToggle.textContent = '🙈';
  } else {
    passwordInput.type = 'password';
    passwordToggle.textContent = '👁️'; 
  }
}

// Login Check Function: İstifadəçi adı və şifrə yoxlanılır.
function runCheckLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const loginOutput = document.getElementById('login-output');
  loginOutput.innerHTML = ''; 

  // İstifadəçi adı ən azı 3 hərfdən ibarət olmalıdır
  if (username.length < 3) {
    loginOutput.innerHTML = '<p>İstifadəçi adı ən azı 3 hərfdən ibarət olmalıdır.</p>';
    return;
  }

  // Şifrənin uzunluğu ən azı 8 simvol olmalıdır
  if (password.length < 8) {
    loginOutput.innerHTML = '<p>Şifrənin uzunluğu ən azı 8 simvol olmalıdır.</p>';
    return;
  }

  // Şifrədə ən azı bir böyük hərf və bir simvol olmalıdır
  const hasUpperCase = /[A-Z]/.test(password); 
  const hasSpecialChar = /[!@#$%^&*()]/.test(password); 

  if (!hasUpperCase || !hasSpecialChar) {
    loginOutput.innerHTML = '<p>Şifrə ən azı bir böyük hərf və bir simvol içerməlidir (!@#$%^&*()).</p>';
    return;
  }


  loginOutput.innerHTML = '<p>Login uğurla tamamlandı.</p>';
}

// FizzBuzz Function: İlk 30 nəticəni göstərir
let fizzBuzzIndex = 0;
const fizzBuzzStep = 30; 

function runFizzBuzz() {
  fizzBuzzIndex = 0; 
  const fizzbuzzOutput = document.getElementById('fizzbuzz-output');
  fizzbuzzOutput.innerHTML = ''; 
  showMoreFizzBuzz(); 
}


function showMoreFizzBuzz() {
  const fizzbuzzOutput = document.getElementById('fizzbuzz-output');
  const loadMoreButton = document.getElementById('load-more');
  const closeButton = document.getElementById('close-results');
  let end;


  if (fizzBuzzIndex >= 90) {
    end = 100; 
  } else {
    end = fizzBuzzIndex + fizzBuzzStep;
  }


  for (let i = fizzBuzzIndex + 1; i <= end && i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzbuzzOutput.innerHTML += `<p>${i}: FizzBuzz</p>`;
    } else if (i % 3 === 0) {
      fizzbuzzOutput.innerHTML += `<p>${i}: Fizz</p>`;
    } else if (i % 5 === 0) {
      fizzbuzzOutput.innerHTML += `<p>${i}: Buzz</p>`;
    } else {
      fizzbuzzOutput.innerHTML += `<p>${i}: ${i}</p>`;
    }
  }
  fizzBuzzIndex = end; 


  if (fizzBuzzIndex >= 100) {
    loadMoreButton.style.display = 'none';
  } else {
    loadMoreButton.style.display = 'block'; 
  }


  closeButton.style.display = 'block';
}

// FizzBuzz nəticələrini bağlama funksiyası
function closeFizzBuzzResults() {
  const fizzbuzzOutput = document.getElementById('fizzbuzz-output');
  const loadMoreButton = document.getElementById('load-more');
  const closeButton = document.getElementById('close-results');

  fizzbuzzOutput.innerHTML = ''; 
  loadMoreButton.style.display = 'none'; 
  closeButton.style.display = 'none'; 
}

// SumRange Function: İki rəqəm arasındakı bütün rəqəmlərin cəmini hesablayır.
function runSumRange() {
  const start = parseInt(document.getElementById('start').value);
  const end = parseInt(document.getElementById('end').value);
  const sumrangeOutput = document.getElementById('sumrange-output');
  sumrangeOutput.innerHTML = ''; 

  if (!isNaN(start) && !isNaN(end) && start <= end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    sumrangeOutput.innerHTML = `<p>${start} və ${end} arasında olan rəqəmlərin cəmi: ${sum}</p>`;
  } else {
    sumrangeOutput.innerHTML = '<p>Zəhmət olmasa düzgün rəqəmlər daxil edin.</p>';
  }
}
