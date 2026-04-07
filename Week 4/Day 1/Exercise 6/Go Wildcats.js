// 🌟 Game Info
const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];


//  1. Add "!" to usernames
const usernames = [];

gameInfo.forEach(user => {
  usernames.push(user.username + "!");
});

console.log(usernames);
// ["john!", "becky!", "susy!", "tyson!"]


//  2. Users with score > 5
const winners = [];

gameInfo.forEach(user => {
  if (user.score > 5) {
    winners.push(user.username);
  }
});

console.log(winners);
// ["becky", "susy"]


// 🔹 3. Total score
let totalScore = 0;

gameInfo.forEach(user => {
  totalScore += user.score;
});

console.log(totalScore);
// 71