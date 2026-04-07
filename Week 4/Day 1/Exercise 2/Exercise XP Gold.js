// 🌟 Exercise 1 : Analyzing the map method
const mapResult = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});

console.log("Exercise 1 Output:", mapResult);
// Expected: [2, 4, 6]


// 🌟 Exercise 2 : Analyzing the reduce method
const reduceResult = [[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

console.log("Exercise 2 Output:", reduceResult);
// Expected: [1, 2, 0, 1, 2, 3]


// 🌟 Exercise 3 : Analyze index (i)
const arrayNum = [1, 2, 4, 5, 8, 9];

const newArray = arrayNum.map((num, i) => {
  console.log("Value:", num, "Index:", i);
  // alert(num); // Uncomment if running in browser
  return num * 2;
});

console.log("Mapped Array:", newArray);
// i = 0,1,2,3,4,5


// 🌟 Exercise 4 : Nested arrays

//  1. Flatten partially
const array = [[1],[2],[3],[[[4]]],[[[5]]]];

const flattened = array.map(item => item.flat(2));
console.log("Flattened:", flattened);
// Expected: [1, 2, 3, [4], [5]]


//  2. Greeting array → sentences
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"]
];

const sentences = greeting.map(arr => arr.join(" "));
console.log("Sentences:", sentences);
// ["Hello young grasshopper!", "you are", "learning fast!"]


//  3. Turn into one string
const fullSentence = sentences.join(" ");
console.log("Full Sentence:", fullSentence);
// "Hello young grasshopper! you are learning fast!"


//  4. Trapped number
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

const unwrapped = trapped.flat(Infinity);
console.log("Unwrapped:", unwrapped);
// [3]