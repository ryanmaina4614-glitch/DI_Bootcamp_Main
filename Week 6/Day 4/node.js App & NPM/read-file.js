// =====================================
// FILE READER MODULE
// =====================================

const fs = require('fs');

function readFileContent() {
    try {
        const data = fs.readFileSync('./files/file-data.txt', 'utf-8');
        console.log("File Content:");
        console.log(data);
    } catch (error) {
        console.error("Error reading file:", error.message);
    }
}

module.exports = readFileContent;