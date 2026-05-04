/*
========================================================
🌟 TRIVIA QUIZ GAME USING EXPRESS.JS & EXPRESS.ROUTER
========================================================

📁 PROJECT STRUCTURE
trivia-quiz/
│
├── app.js
├── package.json
└── routes/
    └── quiz.js

========================================================
STEP 1: CREATE PROJECT
========================================================

mkdir trivia-quiz
cd trivia-quiz

========================================================
STEP 2: INITIALIZE NODE PROJECT
========================================================

npm init -y

========================================================
STEP 3: INSTALL EXPRESS
========================================================

npm install express

========================================================
STEP 4: CREATE ROUTER MODULE
========================================================
*/

// routes/quiz.js

const express = require("express");
const router = express.Router();

// Middleware for parsing JSON
router.use(express.json());

/*
========================================================
TRIVIA QUESTIONS (HARD-CODED)
========================================================
*/

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

/*
========================================================
GAME VARIABLES
========================================================
*/

let currentQuestionIndex = 0;
let score = 0;

/*
========================================================
GET /quiz
START QUIZ & DISPLAY FIRST QUESTION
========================================================
*/

router.get("/", (req, res) => {
  // Reset quiz when starting
  currentQuestionIndex = 0;
  score = 0;

  res.json({
    message: "Trivia Quiz Started!",
    questionNumber: currentQuestionIndex + 1,
    question: triviaQuestions[currentQuestionIndex].question,
  });
});

/*
========================================================
POST /quiz
SUBMIT ANSWER & MOVE TO NEXT QUESTION
========================================================
*/

router.post("/", (req, res) => {
  const userAnswer = req.body.answer;

  // Get current question
  const currentQuestion = triviaQuestions[currentQuestionIndex];

  // Check answer
  let feedback = "";

  if (
    userAnswer &&
    userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()
  ) {
    score++;
    feedback = "✅ Correct answer!";
  } else {
    feedback = `❌ Wrong answer! Correct answer is "${currentQuestion.answer}"`;
  }

  // Move to next question
  currentQuestionIndex++;

  // Check if quiz is finished
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      message: "Quiz Completed!",
      feedback,
      finalScore: `${score} / ${triviaQuestions.length}`,
      scoreRoute: "Visit /quiz/score to view your final score",
    });
  }

  // Show next question
  res.json({
    feedback,
    nextQuestionNumber: currentQuestionIndex + 1,
    nextQuestion: triviaQuestions[currentQuestionIndex].question,
  });
});

/*
========================================================
GET /quiz/score
DISPLAY FINAL SCORE
========================================================
*/

router.get("/score", (req, res) => {
  res.json({
    message: "Final Quiz Score",
    score: `${score} / ${triviaQuestions.length}`,
  });
});

module.exports = router;

/*
========================================================
STEP 5: CREATE EXPRESS APPLICATION
========================================================
*/

// app.js

const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Import Router
const quizRouter = require("./routes/quiz");

// Mount Router
app.use("/quiz", quizRouter);

/*
========================================================
HOME ROUTE
========================================================
*/

app.get("/", (req, res) => {
  res.send("Welcome to the Trivia Quiz Game API!");
});

/*
========================================================
START SERVER
========================================================
*/

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Trivia Quiz Server running on http://localhost:${PORT}`);
});

/*
========================================================
STEP 6: RUN SERVER
========================================================

node app.js

========================================================
STEP 7: TEST API ROUTES
========================================================

1️⃣ START QUIZ
GET http://localhost:3000/quiz

--------------------------------------------------------

2️⃣ SUBMIT ANSWER
POST http://localhost:3000/quiz

JSON BODY EXAMPLE:
{
  "answer": "Paris"
}

--------------------------------------------------------

3️⃣ VIEW FINAL SCORE
GET http://localhost:3000/quiz/score

========================================================
SAMPLE QUIZ FLOW
========================================================

GET /quiz

Response:
{
  "message": "Trivia Quiz Started!",
  "questionNumber": 1,
  "question": "What is the capital of France?"
}

--------------------------------------------------------

POST /quiz
Body:
{
  "answer": "Paris"
}

Response:
{
  "feedback": "✅ Correct answer!",
  "nextQuestionNumber": 2,
  "nextQuestion": "Which planet is known as the Red Planet?"
}

--------------------------------------------------------

POST /quiz
Body:
{
  "answer": "Mars"
}

--------------------------------------------------------

POST /quiz
Body:
{
  "answer": "Blue whale"
}

Response:
{
  "message": "Quiz Completed!",
  "feedback": "✅ Correct answer!",
  "finalScore": "3 / 3",
  "scoreRoute": "Visit /quiz/score to view your final score"
}

========================================================
✅ END OF ASSIGNMENT
========================================================
*/