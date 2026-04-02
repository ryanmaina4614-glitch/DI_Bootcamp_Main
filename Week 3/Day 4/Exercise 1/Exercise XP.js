// 🌟 Exercise 1 : Scope


// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`); // 3
}

// #1.1
// Output: 3 (a is reassigned inside the function)

// #1.2
// If 'a' was const → ERROR 
// because const cannot be reassigned


// #2
let a = 0;

function funcTwo() {
    a = 5; // modifies global variable
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1
// funcThree() → 0
// funcTwo()
// funcThree() → 5

// #2.2
// If 'a' was const → ERROR 
// because funcTwo tries to reassign it


// #3
function funcFour() {
    window.a = "hello"; // creates global variable
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1
// funcFour()
// funcFive() → "hello"


// #4
let a4 = 1;

function funcSix() {
    let a4 = "test";
    alert(`inside the funcSix function ${a4}`); // "test"
}

// #4.1
// Output: "test" (local scope)

// #4.2
// If const → same result 
// because no reassignment


// #5
let a5 = 2;

if (true) {
    let a5 = 5;
    alert(`in the if block ${a5}`); // 5
}

alert(`outside of the if block ${a5}`); // 2

// #5.2
// If const → same result 
// block scope still applies




// 🌟 Exercise 2 : Ternary operator


const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints); // 10



// 🌟 Exercise 3 : Is it a string ?


const isString = value => typeof value === "string";

console.log(isString("hello")); // true
console.log(isString([1, 2, 4, 0])); // false



// 🌟 Exercise 4 : Find the sum


const sum = (a, b) => a + b;

console.log(sum(3, 5)); // 8




// 🌟 Exercise 5 : Kg and grams


// Function declaration
function kgToGrams1(kg) {
    return kg * 1000;
}
console.log(kgToGrams1(2));

// Function expression
const kgToGrams2 = function(kg) {
    return kg * 1000;
};
console.log(kgToGrams2(2));

// Difference:
// Function declarations are hoisted, function expressions are not.

// Arrow function
const kgToGrams3 = kg => kg * 1000;
console.log(kgToGrams3(2));



// 🌟 Exercise 6 : Fortune teller


(function(children, partner, location, job) {
    const sentence = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.body.innerHTML += `<p>${sentence}</p>`;
})(2, "Alex", "Kenya", "Developer");



// 🌟 Exercise 7 : Welcome


(function(username) {
    const navbar = document.querySelector("nav");

    const userDiv = document.createElement("div");

    userDiv.innerHTML = `
        <span>${username}</span>
        <img src="https://via.placeholder.com/30" alt="profile">
    `;

    navbar.appendChild(userDiv);
})("John");




// 🌟 Exercise 8 : Juice Bar


// Part I
function makeJuice(size) {
    function addIngredients(i1, i2, i3) {
        const sentence = `The client wants a ${size} drink juice, containing ${i1}, ${i2}, ${i3}.`;
        document.body.innerHTML += `<p>${sentence}</p>`;
    }

    addIngredients("apple", "banana", "orange");
}

makeJuice("large");


// Part II
function makeJuice2(size) {
    let ingredients = [];

    function addIngredients(i1, i2, i3) {
        ingredients.push(i1, i2, i3);
    }

    function displayJuice() {
        const sentence = `The client wants a ${size} drink juice, containing ${ingredients.join(", ")}.`;
        document.body.innerHTML += `<p>${sentence}</p>`;
    }

    addIngredients("apple", "banana", "orange");
    addIngredients("mango", "pineapple", "kiwi");

    displayJuice();
}

makeJuice2("medium");