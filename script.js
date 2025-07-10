let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

const display = document.getElementById("display");

document.getElementById("start").addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(runStopwatch, 1000);
    isRunning = true;
  }
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  display.textContent = "00:00:00";
  isRunning = false;
});

function runStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = `${h}:${m}:${s}`;
}
