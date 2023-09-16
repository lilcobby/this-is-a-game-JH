// timer functionality
var timeEl = document.querySelector(".timer");
var secondsLeft = 120;
function setTime() {
  // from 3-09-ins_timers-intervals
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      // add function to set the page to it's final form
    }
  }, 1000);
}
setTime();
// end timer functionality

