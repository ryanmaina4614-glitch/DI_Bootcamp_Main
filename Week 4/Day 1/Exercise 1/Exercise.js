// 🌟 Exercise 1 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

// Check for Violet
if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}


// 🌟 Exercise 2 : Colors #2
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
  let suffix = (index === 0) ? "st" :
               (index === 1) ? "nd" :
               (index === 2) ? "rd" : "th";

  console.log(`${index + 1}${suffix} choice is ${color}.`);
});


// 🌟 Exercise 3 : Analyzing

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// ------2------
const country = "USA";
console.log([...country]);

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);


// 🌟 Exercise 4 : Employees
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// 1. map()
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2. filter()
const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");
console.log(fullStackResidents);

// 3. Bonus (filter + map)
const residentLastNames = users
  .filter(user => user.role === "Full Stack Resident")
  .map(user => user.lastName);

console.log(residentLastNames);


// 🌟 Exercise 5 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sentence = epic.reduce((acc, word) => acc + " " + word);
console.log(sentence);


// 🌟 Exercise 6 : Employees #2
const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

// 1. filter passed students
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

// 2. Bonus (filter + forEach)
students
  .filter(student => student.isPassed)
  .forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });