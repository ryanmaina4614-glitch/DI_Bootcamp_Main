// 🌟 Exercise 1 : Dog age to Human years

const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];

// 🔹 1. Using loop
let dogAgeSumLoop = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i].type === "dog") {
    dogAgeSumLoop += data[i].age * 7;
  }
}

console.log("Dog age sum (loop):", dogAgeSumLoop);

// 🔹 2. Using reduce()
const dogAgeSumReduce = data.reduce((acc, animal) => {
  if (animal.type === "dog") {
    return acc + animal.age * 7;
  }
  return acc;
}, 0);

console.log("Dog age sum (reduce):", dogAgeSumReduce);



// 🌟 Exercise 2 : Email cleanup

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';

const cleanEmail = userEmail3.trim();

console.log("Clean Email:", cleanEmail);



// 🌟 Exercise 3 : Employees #3

const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

// Convert to object: "Full Name" => role
const userRoles = {};

users.forEach(user => {
  const fullName = `${user.firstName} ${user.lastName}`;
  userRoles[fullName] = user.role;
});

console.log("User Roles:", userRoles);



// 🌟 Exercise 4 : Array to Object

const letters = ['x', 'y', 'z', 'z'];


//  1. Using for loop
let letterCountLoop = {};

for (let i = 0; i < letters.length; i++) {
  let letter = letters[i];

  if (letterCountLoop[letter]) {
    letterCountLoop[letter]++;
  } else {
    letterCountLoop[letter] = 1;
  }
}

console.log("Letter count (loop):", letterCountLoop);
// { x: 1, y: 1, z: 2 }


//  2. Using reduce()
const letterCountReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log("Letter count (reduce):", letterCountReduce);
// { x: 1, y: 1, z: 2 }