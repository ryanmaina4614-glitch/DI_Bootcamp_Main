// =====================================
// IMPORT MODULES
// =====================================

const greet = require('./greeting');
const showMessage = require('./colorful-message');
const readFileContent = require('./read-file');

// =====================================
// RUN TASKS
// =====================================

console.log(greet("Ryan"));
showMessage();
readFileContent();