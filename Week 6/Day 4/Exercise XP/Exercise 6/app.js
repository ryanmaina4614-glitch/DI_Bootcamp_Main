// =====================================
// IMPORT CHALK (ES6)
// =====================================

import chalk from 'chalk';

// =====================================
// COLORFUL OUTPUT
// =====================================

console.log(chalk.blue("Hello, world! 🌍"));
console.log(chalk.green("Success! Everything is working."));
console.log(chalk.red("Error: Something went wrong!"));
console.log(chalk.yellow.bold("Warning: Check your code."));
console.log(chalk.bgMagenta.white("Styled background text!"));

// Mix styles
console.log(chalk.cyan.bold.underline("Colorful and Styled Text!"));