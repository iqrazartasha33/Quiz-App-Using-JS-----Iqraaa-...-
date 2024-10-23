const questions = [
  {
    question: "What does the break statement do in JavaScript?",
    answers: [
      { text: "Exits the current loop or function", correct: true },
      { text: "Pauses the execution of code", correct: false },
      { text: "Skips one iteration of the loop", correct: false },
      { text: "Exits the entire script", correct: false },
    ],
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      { text: "The head section", correct: false },
      { text: "The body section", correct: false },
      { text: "None of the above", correct: false },
      {
        text: "Both the head section and the body section are correct",
        correct: true,
      },
    ],
  },
  {
    question: "How many ways are there with which we can declare a variable in javascript?",
    answers: [
      { text: "One", correct: false },
      { text: "Six", correct: false },
      { text: "Three", correct: true },
      { text: "Four", correct: false },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function = myFunction()", correct: false },
      { text: "function : myFunction()", correct: false },
      { text: "function / myFunction()", correct: false },
      { text: "function myFunction()", correct: true },
     
    ],
  },

  {
    question: "Is Javascript case-sensitive?",
    answers: [
      { text: "No", correct: false },
      { text: "Yes", correct: true },
      { text: "Both", correct: false },
      { text: "None of the above", correct: false },
     
    ],
  },

  {
    question: "Which loop will always execute at least once, even if the condition is false?",
    answers: [
      { text: "for loop", correct: false },
      { text: "while loop", correct: false },
      { text: "do...while loop", correct: true},
      { text: "None of the above", correct: false },
     
    ],
  },

  {
    question: "Which built-in method can be used to convert a string to lowercase?",
    answers: [
      { text: "toLowerCase()", correct: true },
      { text: "toLower", correct: false },
      { text: "downcase", correct: false},
      { text: "tolowercase", correct: false },
     
    ],
  },

  {
    question: "How does a WHILE loop start?",
    answers: [
      { text: "while( i<= 10; i++)", correct: false },
      { text: "while(i<=10)", correct: true},
      { text: "while i=1 to 10", correct: false},
      { text: "while 1=0", correct: false },
     
    ],
  },

  {
    question: "How can you detect the application name of the client's browser?",
    answers: [
      { text: "navigator.browserName", correct: false },
      { text: "browser.name", correct: false},
      { text: "client.navName", correct: false},
      { text: "navigator.appName", correct: true },
     
    ],
  },

  {
    question: "Which of the following events occurs when the user clicks on an HTML element?",
    answers: [
      { text: "onclick", correct: true},
      { text: "onchange", correct: false},
      { text: "onmouseclick", correct: false},
      { text: "onmouseover", correct: false},
     
    ],
  },


  // Add more questions here
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

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
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
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

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
