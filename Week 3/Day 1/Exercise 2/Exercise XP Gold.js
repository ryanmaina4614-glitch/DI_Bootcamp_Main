//🌟 Exercise 1 : Divisible by three


let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
    let isDivisible = numbers[i] % 3 === 0;
    console.log(isDivisible);
}



// 🌟 Exercise 2 : Attendance


let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
};

// Prompt user
let name = prompt("Enter your name:").toLowerCase();

// Check if name exists
if (name in guestList) {
    console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
} else {
    console.log("Hi! I'm a guest.");
}



// 🌟 Exercise 3 : Playing with numbers


let age = [20, 5, 12, 43, 98, 55];

// 1. Sum of all numbers
let sum = 0;

for (let i = 0; i < age.length; i++) {
    sum += age[i];
}

console.log("Sum:", sum);


// 2. Highest age
let highest = age[0];

for (let i = 1; i < age.length; i++) {
    if (age[i] > highest) {
        highest = age[i];
    }
}

console.log("Highest age:", highest);