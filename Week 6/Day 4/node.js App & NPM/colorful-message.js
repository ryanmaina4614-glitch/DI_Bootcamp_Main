// =====================================
// COLORFUL MESSAGE MODULE
// =====================================

const chalk = require('chalk');

function showMessage() {
    console.log(chalk.blue("🌟 Welcome to the Daily Challenge!"));
    console.log(chalk.green.bold("Everything is working perfectly!"));
}

module.exports = showMessage;