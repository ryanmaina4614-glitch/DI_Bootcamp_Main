 
// 🌟 Exercise 1 : List of people
 

let people = ["Greg", "Mary", "Devon", "James"];

// Remove “Greg”
people.shift();

// Replace “James” with “Jason”
people[people.indexOf("James")] = "Jason";

// Add your name (replace with yours if needed)
people.push("Ryan");

// Log Mary's index
console.log("Mary index:", people.indexOf("Mary"));

// Copy array without “Mary” and your name
let copy = people.slice(1, 3);
console.log("Copy:", copy);

// Index of “Foo”
console.log("Foo index:", people.indexOf("Foo")); // -1 (not found)

// Last element
let last = people[people.length - 1];
console.log("Last element:", last);



// 🌟 Part II - Loops
 

// Log all people
for (let person of people) {
    console.log(person);
}

// Stop at “Devon”
for (let person of people) {
    console.log(person);
    if (person === "Devon") break;
}



// 🌟 Exercise 2 : Favorite colors


let colors = ["blue", "red", "black", "green", "purple"];

// Basic version
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus with suffixes
let suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}



// 🌟 Exercise 3 : Repeat the question


let num;

do {
    num = Number(prompt("Enter a number:"));
} while (num < 10);



// 🌟 Exercise 4 : Building Management


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};

// Number of floors
console.log("Floors:", building.numberOfFloors);

// Apartments on floor 1 and 3
console.log("Apts 1st floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apts 3rd floor:", building.numberOfAptByFloor.thirdFloor);

// Second tenant and rooms
let secondTenant = building.nameOfTenants[1];
let rooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log(`${secondTenant} has ${rooms} rooms`);

// Rent comparison
let sarahRent = building.numberOfRoomsAndRent.sarah[1];
let davidRent = building.numberOfRoomsAndRent.david[1];
let danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log("Updated Dan rent:", building.numberOfRoomsAndRent.dan[1]);



// 🌟 Exercise 5 : Family


const family = {
    father: "John",
    mother: "Jane",
    son: "Mike",
};

// Keys
for (let key in family) {
    console.log(key);
}

// Values
for (let key in family) {
    console.log(family[key]);
}



// 🌟 Exercise 6 : Rudolf


const details = {
    my: "name",
    is: "Rudolf",
    the: "reindeer",
};

let sentence = "";
for (let key in details) {
    sentence += key + " " + details[key] + " ";
}

console.log(sentence.trim());



// 🌟 Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretName = names
    .map(name => name[0])  // get first letters
    .sort()                // sort alphabetically
    .join("");             // combine into string

console.log("Secret society name:", secretName);