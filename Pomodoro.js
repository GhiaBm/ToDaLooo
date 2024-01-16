let focusButton = document.getElementById("focusPomodoro");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreakPomodoro");
let longBreakButton = document.getElementById("longbreakPomodoro");
let startBtn = document.getElementById("btn-startPomodoro");
let reset = document.getElementById("btn-resetPomodoro");
let pause = document.getElementById("btn-pausePomodoro");
let time = document.getElementById("timePomodoro");
let set;
let active = "focusPomodoro";
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
  value = value < 10 ? `0${value}` : value;
  return value;
};

reset.addEventListener(
  "click",
  (resetTime = () => {
    pauseTimer();
    switch (active) {
      case "longPomodoro":
        minCount = 14;
        break;
      case "shortPomodoro":
        minCount = 4;
        break;
      default:
        minCount = 24;
        break;
    }
    count = 59;
    time.textContent = `${minCount + 1}:00`;
  })
);

const removeFocus = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("btn-focusPomodoro");
  });
};

focusButton.addEventListener("click", () => {
  removeFocus();
  focusButton.classList.add("btn-focusPomodoro");
  pauseTimer();
  minCount = 24;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
});
function shortbreaking() {
  active = "shortPomodoro";
  removeFocus();
  shortBreakButton.classList.add("btn-focusPomodoro");
  pauseTimer();
  minCount = 4;
  count = 59;
  time.textContent = `${appendZero(minCount + 1)}:00`;
}
shortBreakButton.addEventListener("click", () => {
  shortbreaking();
});

longBreakButton.addEventListener("click", () => {
  active = "longPomodoro";
  removeFocus();
  longBreakButton.classList.add("btn-focusPomodoro");
  pauseTimer();
  minCount = 14;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
});

pause.addEventListener(
  "click",
  (pauseTimer = () => {
    paused = true;
    clearInterval(set);
    startBtn.classList.remove("hidePomodoro");
    pause.classList.remove("showPomodoro");
    reset.classList.remove("showPomodoro");
  })
);

startBtn.addEventListener("click", () => {
  startbsgs()
});
function startbsgs() {
  reset.classList.add("showPomodoro");
  pause.classList.add("showPomodoro");
  startBtn.classList.add("hidePomodoro");
  startBtn.classList.remove("showPomodoro");
  if (paused) {
    paused = false;
    time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
    set = setInterval(() => {
      count--;
      time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
      if (count == 0) {
        if (minCount != 0) {
          minCount--;
          count = 60;
        } else {
          clearInterval(set);
        }
      }
    }, 1000);
  }
}