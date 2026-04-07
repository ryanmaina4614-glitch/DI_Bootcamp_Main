/*******************************
 🌟 Exercise 1: printFullName
*******************************/

// Destructure directly in parameters
function printFullName({ first, last }) {
    return `Your full name is ${first} ${last}`;
}

// Test
console.log("Exercise 1 Output:");
console.log(printFullName({ first: 'Elie', last: 'Schoppik' }));
// Expected: Your full name is Elie Schoppik


/*******************************
 🌟 Exercise 2: keys and values
*******************************/

function keysAndValues(obj) {
    // Get keys and sort them
    const keys = Object.keys(obj).sort();

    // Map values based on sorted keys
    const values = keys.map(key => obj[key]);

    return [keys, values];
}

// Tests
console.log("\nExercise 2 Output:");
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));


/*******************************
 🌟 Exercise 3: Counter class
*******************************/

class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne; // reference to same object
counterTwo.increment();

console.log("\nExercise 3 Output:");
console.log(counterOne.count);
// Expected: 3


/*******************************
 💡 Explanation (for understanding)
*******************************/

// counterOne and counterTwo point to the SAME object in memory.
// So incrementing counterTwo also affects counterOne.
