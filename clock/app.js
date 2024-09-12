const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const millisecond = document.querySelector(".millisecond");
const startwatch = document.querySelector(".start");
const stopwatch = document.querySelector(".stop");
const clearwatch = document.querySelector(".clear");

var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var counterInt;
var isRunning = false; 
var isPaused = false;  

function baslat() {
    counterInt = setInterval(function () {
        milliseconds++;
        if (milliseconds == 100) {
            seconds++;
            milliseconds = 0;
            if (seconds == 60) {
                minutes++;
                seconds = 0;
                if (minutes == 60) {
                    hours++;
                    minutes = 0;
                }
            }
        }
        millisecond.textContent = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
        second.textContent = seconds < 10 ? `0${seconds}` : seconds;
        minute.textContent = minutes < 10 ? `0${minutes}` : minutes;
        hour.textContent = hours < 10 ? `0${hours}` : hours;
    }, 10);
}

startwatch.addEventListener("click", function () {
    if (!isRunning && !isPaused) {
        baslat();
        isRunning = true;
        startwatch.disabled = true; 
    }
});

stopwatch.addEventListener("click", function () {
    if (isRunning) {
        clearInterval(counterInt); 
        stopwatch.textContent = "Continue";
        isRunning = false;
        isPaused = true; 
    } else if (isPaused) {
        baslat(); 
        stopwatch.textContent = "Stop";
        isRunning = true;
        isPaused = false; 
    }
});

clearwatch.addEventListener("click", function () {
    clearInterval(counterInt);
    startwatch.disabled = false; 
    stopwatch.textContent = "Stop";
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    millisecond.textContent = "00";
    second.textContent = "00";
    minute.textContent = "00";
    hour.textContent = "00";
    isRunning = false;
    isPaused = false; 
});
