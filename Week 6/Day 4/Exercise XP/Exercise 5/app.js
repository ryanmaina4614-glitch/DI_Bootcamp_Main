// =====================================
// IMPORT MODULES
// =====================================

const _ = require('lodash'); // external package
const math = require('./math'); // custom module

// =====================================
// USING CUSTOM MATH FUNCTIONS
// =====================================

const sum = math.add(5, 10);
const product = math.multiply(4, 6);

console.log("Sum:", sum);
console.log("Product:", product);

// =====================================
// USING LODASH FUNCTIONS
// =====================================

// Example: sum an array
const numbers = [10, 20, 30, 40];
const total = _.sum(numbers);

// Example: multiply all numbers (custom using lodash reduce)
const multiplied = _.reduce(numbers, (acc, num) => acc * num, 1);

console.log("Lodash Sum:", total);
console.log("Lodash Multiply:", multiplied);