// =====================================
// FILE MANAGER MODULE (CommonJS)
// =====================================

const fs = require('fs');

// =====================================
// FUNCTION: READ FILE
// =====================================

function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log("File Content:");
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error reading file:", error.message);
    }
}

// =====================================
// FUNCTION: WRITE FILE
// =====================================

function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content);
        console.log("File written successfully.");
    } catch (error) {
        console.error("Error writing file:", error.message);
    }
}

// =====================================
// EXPORT FUNCTIONS
// =====================================

module.exports = {
    readFile,
    writeFile
};