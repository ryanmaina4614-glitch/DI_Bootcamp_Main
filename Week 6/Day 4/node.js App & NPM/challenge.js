// =====================================
// COMPLETE CHALLENGE
// =====================================

const greet = require('./greeting');
const showMessage = require('./colorful-message');
const readFileContent = require('./read-file');

console.log("=== DAILY CHALLENGE START ===\n");

console.log(greet("Ryan"));
console.log();

showMessage();
console.log();

readFileContent();

console.log("\n=== DAILY CHALLENGE COMPLETE ===");