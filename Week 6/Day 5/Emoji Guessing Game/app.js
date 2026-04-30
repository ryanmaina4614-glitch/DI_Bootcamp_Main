// ===============================
// IMPORTS & SETUP
// ===============================
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// DATA
// ===============================
const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍎", name: "Apple" },
  { emoji: "⚽", name: "Soccer" },
  { emoji: "🎧", name: "Headphones" },
  { emoji: "📚", name: "Books" }
];

let score = 0;
let leaderboard = [];

// ===============================
// HELPER FUNCTIONS
// ===============================
function getRandomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function getOptions(correctName) {
  let options = new Set();
  options.add(correctName);

  while (options.size < 4) {
    let random = emojis[Math.floor(Math.random() * emojis.length)].name;
    options.add(random);
  }

  return Array.from(options).sort(() => Math.random() - 0.5);
}

// ===============================
// ROUTES
// ===============================

// HOME PAGE (GAME UI)
app.get("/", (req, res) => {
  const current = getRandomEmoji();
  const options = getOptions(current.name);

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Emoji Game 🎮</title>
      <style>
        body {
          font-family: Arial;
          text-align: center;
          margin-top: 50px;
          background: #111;
          color: #fff;
        }
        .emoji {
          font-size: 80px;
        }
        button {
          padding: 10px 20px;
          margin: 10px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
        .score {
          margin-top: 20px;
          font-size: 20px;
        }
      </style>
    </head>
    <body>

      <h1>🎯 Emoji Guessing Game</h1>
      <div class="emoji">${current.emoji}</div>

      <form id="gameForm">
        ${options
          .map(
            opt =>
              `<button type="submit" name="guess" value="${opt}">${opt}</button>`
          )
          .join("")}
      </form>

      <div class="score">Score: ${score}</div>
      <div id="feedback"></div>

      <script>
        const form = document.getElementById("gameForm");

        form.addEventListener("submit", async (e) => {
          e.preventDefault();
          const guess = e.submitter.value;

          const res = await fetch("/guess", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              guess: guess,
              correct: "${current.name}"
            })
          });

          const data = await res.json();

          document.getElementById("feedback").innerText = data.message;

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        });
      </script>

    </body>
    </html>
  `);
});

// HANDLE GUESS
app.post("/guess", (req, res) => {
  const { guess, correct } = req.body;

  if (guess === correct) {
    score++;
    res.json({ message: "✅ Correct!" });
  } else {
    res.json({ message: "❌ Wrong! Correct was " + correct });
  }
});

// LEADERBOARD
app.post("/save-score", (req, res) => {
  const { name } = req.body;

  leaderboard.push({ name, score });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 5);

  score = 0;

  res.json({ message: "Score saved!" });
});

// VIEW LEADERBOARD
app.get("/leaderboard", (req, res) => {
  res.json(leaderboard);
});

// ===============================
// START SERVER
// ===============================
const PORT = 3000;

app.listen(PORT, () => {
  console.log("🎮 Game running on http://localhost:" + PORT);
});
