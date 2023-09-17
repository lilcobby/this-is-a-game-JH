var opener1 = document.getElementById("opener");
// two questions for now from youtube vid https://www.youtube.com/watch?v=PBcqGxrr9g8&ab_channel=GreatStack I couldnt make my idea work so i need a base
const questions = [
  {
    question: "text for question 1",
    answers: [
      { text: "one", correct: false },
      { text: "two", correct: false },
      { text: "three", correct: true },
      { text: "four", correct: false },
    ],
  },
  {
    question: "text for question 2",
    answers: [
      { text: "one-1", correct: false },
      { text: "two-2", correct: false },
      { text: "three-3", correct: true },
      { text: "four-4", correct: false },
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
var timeEl = document.querySelector(".timer");
// let secondsLeft = "";

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
let counter = 5;
let timeout;

function timedCount() {
  document.getElementById("timer").textContent = counter;
  counter--;
  timeout = setTimeout(timedCount, 1000);
  if (counter < 0) {
    clearTimeout(timeout);
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

// show score
function showScore() {
  resetState();
  questionElement.innerHTML = "you scored x out of y";
  nextButton.innerHTML = "play again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
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

startQuiz();

// // start button starts timer and adds list element text with buttons.
// var startButton = document.querySelector(".start-button");
// startButton.addEventListener("click", function () {
//   //   removes start button and p, calls function to populate the button answers with text and the question with text from first set of quest and ans.
//   opener1 = opener1.textContent = "";
//   startButton.parentNode.remove();
// });

// end start button
