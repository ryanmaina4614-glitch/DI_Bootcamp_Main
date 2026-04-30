// =====================================
// COPY FILE CONTENT (CommonJS)
// =====================================

const fs = require('fs');

const sourceFile = 'source.txt';
const destinationFile = 'destination.txt';

try {
    // Read content from source file
    const data = fs.readFileSync(sourceFile, 'utf-8');

    // Write content to destination file
    fs.writeFileSync(destinationFile, data);

    console.log("File copied successfully.");
} catch (error) {
    console.error("Error copying file:", error.message);
}