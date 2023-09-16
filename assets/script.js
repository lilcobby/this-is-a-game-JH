var opener1 = document.getElementById("opener");
var quest1 = document.getElementById("one");
var quest2 = document.getElementById("two");
var quest3 = document.getElementById("three");
var quest4 = document.getElementById("four");
var questprompt = document.getElementById("question");
// need our questions

// timer functionality
var timeEl = document.querySelector(".timer");
var secondsLeft = 120;
function setTime() {
  // from 4-09-ins_timers-intervals
  var timeEl = document.querySelector(".timer");
  var secondsLeft = 120;
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
// end timer functionality

// start button starts timer and adds list element text with buttons.
var startButton = document.querySelector(".start-button");
startButton.addEventListener("click", function () {
  //   removes start button and p
  opener1 = opener1.textContent = "";
  startButton.parentNode.remove();
  setTime();
  quest1 = quest1.innerHTML += "<button> this just got added </button>";
  quest2 = quest2.innerHTML += "<button> this has been added too </button>";
  quest3 = quest3.innerHTML += "<button> this too </button>";
  quest4 = quest4.innerHTML += "<button> this lastly </button>";
  questprompt = questprompt.textContent += "Here is your first question";
});

// end start button

// need to create our question and our answer buttons these buttons reset the page to a new question answer pool and reduce our timer by 15 seconds on click event.target to id wrong and right answers. all buttons refresh, wrong reduces time

// end question and answer buttons
