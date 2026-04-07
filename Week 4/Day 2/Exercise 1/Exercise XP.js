
// 🌟 Exercise 1: Location

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
};

// Destructuring
const {
    name,
    location: {
        country,
        city,
        coordinates: [lat, lng]
    }
} = person;

// Output
console.log(`Exercise 1 Output:`);
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// Expected: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


 //🌟 Exercise 2: Display Student Info

function displayStudentInfo(objUser) {
    const { first, last } = objUser; // destructuring
    return `Your full name is ${first} ${last}`;
}

console.log(`\nExercise 2 Output:`);
console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));
// Expected: Your full name is Elie Schoppik



 //🌟 Exercise 3: User & id

const users = { user1: 18273, user2: 92833, user3: 90315 };

// Convert object to array
const usersArray = Object.entries(users);
console.log(`\nExercise 3 Output (Part 1):`);
console.log(usersArray);
// Expected: [ ['user1', 18273], ['user2', 92833], ['user3', 90315] ]

// Multiply IDs by 2
const updatedUsers = usersArray.map(([user, id]) => [user, id * 2]);
console.log(`Exercise 3 Output (Part 2):`);
console.log(updatedUsers);
// Expected: IDs doubled


 //🌟 Exercise 4: Person class

class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');

console.log(`\nExercise 4 Output:`);
console.log(typeof member);
// Expected: "object"



 //🌟 Exercise 5: Dog class

class Dog {
    constructor(name) {
        this.name = name;
    }
};

// Correct constructor (Option 2)
class Labrador extends Dog {
    constructor(name, size) {
        super(name); // must call parent constructor
        this.size = size;
    }
};

console.log(`\nExercise 5 Output:`);
const myDog = new Labrador("Buddy", "Large");
console.log(myDog);
// Only Option 2 works correctly



 //🌟 Exercise 6: Challenges


// Part 1: True or False
console.log(`\nExercise 6 Output (Part 1):`);
console.log([2] == [2]); // false
console.log({} == {});   // false
// Arrays/objects are compared by reference, not value


// Part 2: Object references
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;

console.log(`\nExercise 6 Output (Part 2):`);
console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5

// Explanation:
// object2 and object3 reference the same object as object1
// object4 is a separate object



 //🌟 Exercise 6: Classes

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    sound(animalSound) {
        return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

// Create instance
const farmerCow = new Mammal("Lily", "cow", "brown and white");

console.log(`\nExercise 6 Output (Part 3):`);
console.log(farmerCow.sound("Moooo"));
// Expected: Moooo I'm a cow, named Lily and I'm brown and white
