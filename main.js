let totalTime = 15;
let totalTimeInSeconds = totalTime * 60;
let currentPercentage = 0;
let currentTime = 0;
let counter = 0;
let interval;
let interval2;
let isRunning = false;

const updateCountAndPercentage = () => {
  currentTime++;
  currentPercentage = (currentTime / totalTimeInSeconds) * 100;
  const formattedPercentage = Math.floor(currentPercentage)
    .toString()
    .padStart(2, "0");
  const percentageDisplay = document.getElementById("percentage");
  percentageDisplay.textContent = `${formattedPercentage}%`;

  if (currentPercentage >= 100) {
    clearInterval(interval2);
    counter++;
    totalTime++;
    totalTimeInSeconds = totalTime * 60;
    currentPercentage = 0;
    currentTime = 0;
    const counterDisplay = document.getElementById("counter");
    counterDisplay.textContent = `Count: ${counter}`;
    const percentageDisplay = document.getElementById("percentage");
    percentageDisplay.textContent = `00%`;
    totalTimeInSeconds = totalTime * 60;
    setTimeout(() => {
      currentTime = 0;
      currentPercentage = 0;
      interval2 = setInterval(() => {
        currentTime++;
        currentPercentage = (currentTime / totalTimeInSeconds) * 100;
        const formattedPercentage = Math.floor(currentPercentage)
          .toString()
          .padStart(2, "0");
        const percentageDisplay = document.getElementById("percentage");
        percentageDisplay.textContent = `${formattedPercentage}%`;

        if (currentPercentage >= 100) {
          clearInterval(interval2);
        }
      }, 1000);
    }, 1000);
  }
};

const startStopButton = document.getElementById("start-stop");
const resetButton = document.getElementById("reset");

startStopButton.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startStopButton.textContent = "Pause";
    interval = setInterval(() => {
      updateCountAndPercentage();
    }, 1000);
  } else {
    clearInterval(interval);
    isRunning = false;
    startStopButton.textContent = "Start";
  }
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  clearInterval(interval2);
  seconds = 0;
  minutes = 0;
  hours = 0;
  ms = 0;
  currentTime = 0;
  currentPercentage = 0;
  counter = 0;
  totalTime = 15;
  totalTimeInSeconds = totalTime * 60;
  document.getElementById("counter").textContent = `Count: ${counter}`;
  document.getElementById("percentage").textContent = `00%`;
  document.querySelector(".display").textContent = "00:00:00";
  isRunning = false;
  startStopButton.textContent = "Start";
});
