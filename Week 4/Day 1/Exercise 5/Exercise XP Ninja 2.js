// 🌟 Exercise 1 : Menu

const menu = [
  { type: "starter", name: "Houmous with Pita" },
  { type: "starter", name: "Vegetable Soup with Houmous peas" },
  { type: "dessert", name: "Chocolate Cake" }
];


//  1. Check if at least one dessert exists (ternary + array method)
const hasDessert = menu.some(item =>
  item.type === "dessert" ? true : false
);

console.log("Has dessert:", hasDessert);


//  2. Check if all are starters
const allStarters = menu.every(item => item.type === "starter");

console.log("All starters:", allStarters);


//  3. Check if main course exists, else add one
const hasMain = menu.some(item => item.type === "main");

if (!hasMain) {
  menu.push({
    type: "main",
    name: "Grilled Chicken with Rice"
  });
}

console.log("Updated menu:", menu);


//  4. Add vegetarian key (boolean)
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

const updatedMenu = menu.map(item => {
  const isVegetarian = vegetarian.some(veg =>
    item.name.toLowerCase().includes(veg)
  );

  return { ...item, vegetarian: isVegetarian };
});

console.log("Menu with vegetarian flag:", updatedMenu);



// 🌟 Exercise 2 : Chop into chunks

function string_chop(str, size) {
  const result = [];

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

console.log(string_chop("developers", 2));
// ["de", "ve", "lo", "pe", "rs"]



// 🌟 Exercise 3 : You said string ?

function search_word(str, word) {
  const regex = new RegExp(word, "g");
  const matches = str.match(regex);

  const count = matches ? matches.length : 0;

  return `'${word}' was found ${count} times.`;
}

console.log(search_word("The quick brown fox", "fox"));
// "'fox' was found 1 times."



// 🌟 Exercise 4 : Reverse Array

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // swap values
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
}

console.log(reverseArray([1,2,3,4,5]));
// [5,4,3,2,1]

console.log(reverseArray([1,2]));
// [2,1]

console.log(reverseArray([]));
// []

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));
// [10,9,8,7,6,5,4,3,2,1]