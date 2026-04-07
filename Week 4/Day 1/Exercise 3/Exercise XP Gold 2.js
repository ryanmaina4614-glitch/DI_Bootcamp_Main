// 🌟 Exercise 1: Sum elements
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(num => {
  sum += num;
});

console.log("Sum:", sum);
// Expected: 15



// 🌟 Exercise 2 : Remove Duplicates
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log("Unique Array:", uniqueArray);
// Expected: [1, 2, 3, 4, 5]



// 🌟 Exercise 3 : Remove certain values
const messyArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];

const cleanArray = messyArray.filter(value => {
  return value && !Number.isNaN(value);
});

console.log("Clean Array:", cleanArray);
// Expected: [15, -22, 47]



// 🌟 Exercise 4 : Repeat please !
function repeat(str, n = 1) {
  let result = "";

  for (let i = 0; i < n; i++) {
    result += str;
  }

  return result;
}

console.log("Repeat:", repeat('Ha!', 3));
// Expected: "Ha!Ha!Ha!"



// 🌟 Exercise 5 : Turtle & Rabbit
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// Line them up
turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);

console.log(startLine);
console.log(turtle);
console.log(rabbit);

/*
Expected Output:
'     ||<- Start line'
'       '
'       '
*/


//  What happens here?
turtle = turtle.trim().padEnd(9, '=');
console.log("Modified Turtle:", turtle);

/*
Explanation:
- trim() removes spaces → ""
- padEnd(9, '=') adds '=' until length = 9

Result:
"========"
*/