// =====================================
// IMPORT FILE FUNCTIONS
// =====================================

const { readFile, writeFile } = require('./fileManager');

// =====================================
// READ FROM FILE
// =====================================

readFile('Hello World.txt');

// =====================================
// WRITE TO FILE
// =====================================

writeFile('Bye World.txt', 'Writing to the file');

// =====================================
// READ FROM FILE AGAIN
// =====================================

readFile('Bye World.txt');