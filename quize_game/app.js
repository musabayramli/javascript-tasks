function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const quizData = [
  {
    question: "JavaScript hansı il icad olunub?",
    choices: ["1993", "1995", "1996", "2000"],
    correct: "1995",
  },
  {
    question: "HTML nə deməkdir?",
    choices: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperLoop Machine Language",
      "HyperText Main Language",
    ],
    correct: "HyperText Markup Language",
  },
  {
    question: "CSS nə üçün istifadə olunur?",
    choices: [
      "Strukturlaşdırma",
      "Stil vermə",
      "Məntiq qurma",
      "Məlumat saxlama",
    ],
    correct: "Stil vermə",
  },
  {
    question: "JavaScript-də hansı məlumat növü mövcuddur?",
    choices: ["String", "Number", "Boolean", "Hamısı"],
    correct: "Hamısı",
  },
  {
    question: "HTML-də bir düymə necə yaradılır?",
    choices: ["<button>", "<btn>", "<input>", "<düymə>"],
    correct: "<button>",
  },
  {
    question: "CSS-də necə rəng təyin etmək olar?",
    choices: ["color", "background-color", "font-color", "Hamısı"],
    correct: "Hamısı",
  },
  {
    question: "JavaScript-də DOM nə üçün istifadə olunur?",
    choices: ["Strukturlaşdırma", "Dinamik məzmun", "Əlaqə", "Bilmədim"],
    correct: "Dinamik məzmun",
  },
  {
    question: "JavaScript-də necə funksiya elan edilir?",
    choices: [
      "function myFunc()",
      "def myFunc()",
      "function:myFunc()",
      "fun myFunc()",
    ],
    correct: "function myFunc()",
  },
  {
    question: "CSS-də 'flexbox' nə üçün istifadə olunur?",
    choices: [
      "Elementlərin düzülüşünü idarə etmək",
      "Fon şəkli əlavə etmək",
      "Şriftin ölçüsünü dəyişmək",
      "Elementin görünməsini idarə etmək",
    ],
    correct: "Elementlərin düzülüşünü idarə etmək",
  },
  {
    question: "JavaScript-də 'for' dövrü nə üçün istifadə olunur?",
    choices: [
      "Dəyişən elan etmək",
      "Funksiya çağırmaq",
      "Döngü yaratmaq",
      "Array yaratmaq",
    ],
    correct: "Döngü yaratmaq",
  },
  {
    question: "HTML-də hansı başlıq elementi ən böyükdür?",
    choices: ["<h1>", "<h2>", "<h3>", "<h4>"],
    correct: "<h1>",
  },
  {
    question: "JavaScript-də hansı işarə məntiqi 'və' əməliyyatını göstərir?",
    choices: ["&&", "||", "==", "!="],
    correct: "&&",
  },
  {
    question: "CSS-də 'margin' nə üçün istifadə olunur?",
    choices: [
      "Elementin daxilində boşluq yaratmaq",
      "Elementin xaricində boşluq yaratmaq",
      "Fon rəngini dəyişmək",
      "Mətnin rəngini dəyişmək",
    ],
    correct: "Elementin xaricində boşluq yaratmaq",
  },
  {
    question: "JavaScript-də 'NaN' nə deməkdir?",
    choices: ["Number and Null", "Not a Number", "Null and NaN", "Not a Null"],
    correct: "Not a Number",
  },
  {
    question:
      "HTML-də şəkil əlavə etmək üçün hansı elementdən istifadə olunur?",
    choices: ["<img>", "<src>", "<pic>", "<image>"],
    correct: "<img>",
  },
].map((q) => ({ ...q, time: Math.floor(Math.random() * 9) + 10 }));

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;
let isPaused = false;

const elements = {
  startBtn: document.getElementById("start-btn"),
  stopBtn: document.getElementById("stop-btn"),
  continueBtn: document.getElementById("continue-btn"),
  nextBtn: document.getElementById("next-btn"),
  question: document.getElementById("question"),
  choices: document.getElementById("choices"),
  time: document.getElementById("time"),
  quiz: document.getElementById("quiz"),
  result: document.getElementById("result"),
  score: document.getElementById("score"),
};

function startQuiz() {
  toggleVisibility(elements.startBtn, false);
  toggleVisibility(elements.stopBtn, true);
  loadQuestion();
}

function startTimer() {
  if (timer) clearInterval(timer);

  elements.time.textContent = timeLeft;
  timer = setInterval(() => {
    if (!isPaused) {
      timeLeft--;
      elements.time.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }
  }, 1000);
}

function loadQuestion() {
  clearInterval(timer);
  const { question, choices } = quizData[currentQuestionIndex];

  elements.question.textContent = escapeHTML(question);
  elements.choices.innerHTML = choices
    .map((choice) => `<button class="choice">${escapeHTML(choice)}</button>`)
    .join("");

  Array.from(elements.choices.children).forEach((button) => {
    button.onclick = () => selectAnswer(button);
  });

  timeLeft = quizData[currentQuestionIndex].time;
  startTimer();
}

function selectAnswer(selectedButton) {
  clearInterval(timer);

  const { correct } = quizData[currentQuestionIndex];
  const isCorrect = selectedButton.textContent === correct;

  updateButtonStyles(selectedButton, isCorrect);
  if (isCorrect) score += 100;

  disableAllButtons();
  toggleControlButtons(true);
}

function updateButtonStyles(button, isCorrect) {
  button.classList.add(isCorrect ? "correct" : "incorrect");
}

function disableAllButtons() {
  Array.from(elements.choices.children).forEach((button) => {
    button.disabled = true;
    button.classList.add("disabled");
  });
}

function toggleControlButtons(disabled) {
  toggleButton(elements.startBtn, disabled);
  toggleButton(elements.stopBtn, disabled);
  toggleVisibility(elements.nextBtn, disabled);
}

function toggleButton(button, disabled) {
  button.disabled = disabled;
  button.classList.toggle("disabled-btn", disabled);
}

function toggleVisibility(element, isVisible) {
  element.style.display = isVisible ? "inline-block" : "none";
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    toggleControlButtons(false);
  } else {
    showResult();
  }
}

function stopQuiz() {
  isPaused = true;
  clearInterval(timer);
  toggleVisibility(elements.stopBtn, false);
  toggleVisibility(elements.continueBtn, true);
}

function continueQuiz() {
  isPaused = false;
  toggleVisibility(elements.continueBtn, false);
  toggleVisibility(elements.stopBtn, true);
  startTimer();
}

function showResult() {
  toggleVisibility(elements.quiz, false);
  toggleVisibility(elements.result, true);
  elements.score.textContent = `Siz ${score}/${
    quizData.length * 100
  } bal topladınız!`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  isPaused = false;

  toggleVisibility(elements.quiz, true);
  toggleVisibility(elements.result, false);
  toggleVisibility(elements.startBtn, true);
  toggleVisibility(elements.stopBtn, false);
  toggleVisibility(elements.continueBtn, false);
  toggleVisibility(elements.nextBtn, false);

  elements.choices.innerHTML = "";
  elements.question.textContent = "";
  elements.time.textContent = "10";
}

document.addEventListener("DOMContentLoaded", () => {
  toggleVisibility(elements.nextBtn, false);
  toggleVisibility(elements.stopBtn, false);
  toggleVisibility(elements.continueBtn, false);
});
