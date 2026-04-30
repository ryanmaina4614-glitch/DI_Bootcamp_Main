// =====================================
// READ DIRECTORY CONTENT
// =====================================

const fs = require('fs');

const directoryPath = './';

try {
    const files = fs.readdirSync(directoryPath);

    console.log("Files in directory:");
    files.forEach(file => {
        console.log(file);
    });
} catch (error) {
    console.error("Error reading directory:", error.message);
}