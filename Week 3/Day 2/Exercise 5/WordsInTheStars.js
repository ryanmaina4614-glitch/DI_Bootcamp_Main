
// Exercise: Words in a Frame


// Prompt user input
const input = prompt("Enter several words separated by commas:");

// Convert input to array and trim spaces
const words = input.split(",").map(word => word.trim());

// Find the longest word length
let maxLength = 0;
words.forEach(word => {
    if (word.length > maxLength) {
        maxLength = word.length;
    }
});

// Create the top and bottom border
const border = "*".repeat(maxLength + 4);

// Print the frame
console.log(border);

words.forEach(word => {
    // Pad each word to match the longest length
    const paddedWord = word + " ".repeat(maxLength - word.length);
    console.log(`* ${paddedWord} *`);
});

console.log(border);