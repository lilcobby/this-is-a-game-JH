var opener1 = document.getElementById("opener");
// two questions for now from youtube vid https://www.youtube.com/watch?v=PBcqGxrr9g8&ab_channel=GreatStack I couldnt make my idea work so i need a base
// all my questions below'
// questions from w3 schools https://www.w3schools.com/quiztest/result.asp
const questions = [
  {
    question: "inside which HTML elemend do we put javascript?",
    answers: [
      { text: "js", correct: false },
      { text: "scripting", correct: false },
      { text: "javascript", correct: false },
      { text: "script", correct: true },
    ],
  },
  {
    question: "what is the correct HTML syntax to change p id ='demo'> this is a demonstration</p> ",
    answers: [
      { text: "document.getElement('p').innerHTML='hello world'", correct: false },
      { text: "#demo.innerHTML='hello world'", correct: false },
      { text: "document.getElementByName('p').innerHTML='hello world", correct: false },
      { text: "document.getElementById('demo').innerHTML = 'hello world'", correct: true },
    ],
  },
  {
    question: "where is the correct place to insert a Java script?",
    answers: [
      { text: "body", correct: true },
      { text: "title", correct: false },
      { text: "footer", correct: false },
      { text: "div", correct: false },
    ],
  },
  {
    question: "what is the correct syntax for an alert box in javascript?",
    answers: [
      { text: "alertBox('...')", correct: false },
      { text: "msg('...')", correct: false },
      { text: "msgBox('...')", correct: false },
      { text: "alert('...')", correct: true },
    ],
  },
  {
    question: "How does a while loop start?",
    answers: [
      { text: "while (i<=10)", correct: false },
      { text: "while (i<=10: i++)", correct: false },
      { text: "for (i=0; i<= 5; i++", correct: true },
      { text: "for (i<=5; i++)", correct: false },
    ],
  },
  {
    question: "how can you add a javascript comment?",
    answers: [
      { text: "'this is a comment'", correct: false },
      { text: "(this is a comment)", correct: false },
      { text: "//this is a comment", correct: true },
      { text: "!--this is a comment--", correct: false },
    ],
  },
  {
    question: "which of the following is a correct array?",
    answers: [
      { text: "var colors = (1, 2, 3, 4)", correct: false },
      { text: "var colors = {1, 2, 3, 4}", correct: false },
      { text: "var colors = '1', '2', '3', '4'", correct: false },
      { text: "var colors = [1, 2, 3, 4]", correct: true },
    ],
  },
  {
    question: "how do you round a number to the nearest integer?",
    answers: [
      { text: "Math.rnd()", correct: false },
      { text: "round()", correct: false },
      { text: "rnd()", correct: false },
      { text: "Math.round()", correct: true },
    ],
  },
  {
    question: "what will this code return? Boolean(10 > 9)",
    answers: [
      { text: "undefined", correct: false },
      { text: "NaN", correct: false },
      { text: "true", correct: true },
      { text: "false", correct: false },
    ],
  },
  {
    question: "what operator is used to assign value to a variable?",
    answers: [
      { text: "=", correct: true },
      { text: "+", correct: false },
      { text: "-", correct: false },
      { text: "/", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");
const qA = document.getElementById("qA");

let currentQuestionIndex = 0;
let score = 0;

// timer functionality
var timeEl = document.getElementById("timer");

// start button starts timer and displays buttons.
var startButton = document.querySelector(".start-button");
qA.style.display = "none";

startButton.addEventListener("click", function () {
  opener1 = opener1.textContent = "";
  startButton.parentNode.remove();
  timedCount();
  qA.style.display = "block";
});
// timer functionality
let counter = 120;
let timeout;

function timedCount() {
  document.getElementById("timer").textContent = counter;
  counter--;
  timeout = setTimeout(timedCount, 1000);
  if (counter < 0) {
    clearTimeout(timeout);
    showScore();
  }
}

// start quiz function
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
// display question function
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  // display answers creates buttons with text that is equal to the current answer pool
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
// removes old questions
function resetState() {
  nextButton.style.display = "none";

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    counter -= 15;
  }
  selectedBtn.classList.add("incorrect");
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    // maybe hide instead of diable
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

// show score and remove button
function showScore() {
  resetState();

  questionElement.innerHTML = score + " out of 10";
  nextButton.remove();
  timeEl.style.display = "none";
  document.getElementById("finalTouches").style.display = "block";

  // nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
    clearTimeout(timeout);
    timeEl.style.display = "none";
    document.getElementById("finalTouches").style.display = "block";
  }
}
// next button function
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
// button to reset page
var resetButton = document.getElementById("resetPage");
resetButton.addEventListener("click", function () {
  location.reload();
});
// button to log high score with textbox that retains info to be saved
// i know this is messy but i'm in a rush to the airport will fix later or resubmit
// help from 04-22 in class work
document.getElementById("finalTouches").style.display = "none";
var nickName = localStorage.getItem("highScore");
document.getElementById("memoryScore").innerHTML = nickName;
var loggingButton = document.getElementById("logHsbutton");
loggingButton.addEventListener("click", function (event) {
  event.preventDefault();
  var nickName = document.querySelector("#highScore").value;
  localStorage.setItem("highScore", nickName + " " + score);
});

startQuiz();
