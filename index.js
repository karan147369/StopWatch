var timer = document.querySelector(".timer");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");
var startTime;
var elapsedTime = 0;
var timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timer.textContent = "00:00:00";
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function updateTimer() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((elapsedTime % 1000) / 10);
  timer.textContent =
    formatTime(minutes) +
    ":" +
    formatTime(seconds) +
    ":" +
    formatTime(milliseconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
