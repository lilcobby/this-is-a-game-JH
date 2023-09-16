var opener1 = document.getElementById("opener");
var quest1 = document.getElementById("one");
var quest2 = document.getElementById("two");
var quest3 = document.getElementById("three");
var quest4 = document.getElementById("four");
var questBox = document.getElementById("question");

// our questions answers 1-10 as variable arrays
var answerPrompt1 = [
  "this is a question",
  "this is also a quesion",
  "final question",
  "jk this is final question",
];
// our question prompts 1-10
var questionPrompt1 = ["this is me asking", "you a question", "about cats"];

// timer functionality
var timeEl = document.querySelector(".timer");
var secondsLeft = 120;
var t = "hello";
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
  //   removes start button and p, calls function to populate the button answers with text and the question with text from first set of quest and ans.
  opener1 = opener1.textContent = "";
  startButton.parentNode.remove();
  setTime();
  appendButton("one", answerPrompt1[0]);
  appendButton("two", answerPrompt1[1]);
  appendButton("three", answerPrompt1[2]);
  appendButton("four", answerPrompt1[3]);
  questBox.textContent = questionPrompt1[0];
});

// end start button

// now we need each subsequent q/a with buttons that reduce time

// function to create answer buttons and question prompts.
function appendButton(q, r) {
  let buttonText = r;
  let button = document.createElement("button");
  button.textContent = buttonText;

  button.setAttribute("type", "button");
  document.getElementById(q).appendChild(button);
}
