
// 🌟 Exercise 1: Union Types


function processValue(value: string | number): string {
  if (typeof value === "number") {
    return `$${value.toFixed(2)}`;
  } else {
    return value.split("").reverse().join("");
  }
}

// Tests
console.log(processValue(100));     // "$100.00"
console.log(processValue("hello")); // "olleh"


// 🌟 Exercise 2: Array Type Annotations


function sumNumbersInArray(arr: (number | string)[]): number {
  let sum = 0;

  for (let item of arr) {
    if (typeof item === "number") {
      sum += item;
    }
  }

  return sum;
}

// Tests
console.log(sumNumbersInArray([1, 2, "3", 4]));        // 7
console.log(sumNumbersInArray(["a", 10, 20, "b", 5])); // 35



// 🌟 Exercise 3: Type Aliases


type AdvancedUser = {
  name: string;
  age: number;
  address?: string;
};

function introduceAdvancedUser(user: AdvancedUser): string {
  if (user.address) {
    return `Hello, my name is ${user.name}, I am ${user.age} years old and I live at ${user.address}.`;
  } else {
    return `Hello, my name is ${user.name}, I am ${user.age} years old.`;
  }
}

// Tests
console.log(introduceAdvancedUser({ name: "Alice", age: 25 }));
console.log(introduceAdvancedUser({ name: "Bob", age: 30, address: "123 Main St" }));



// 🌟 Exercise 4: Optional Parameters


function welcomeUser(name: string, greeting?: string): string {
  const greet = greeting || "Hello";
  return `${greet}, ${name}!`;
}

// Tests
console.log(welcomeUser("Alice"));           // "Hello, Alice!"
console.log(welcomeUser("Bob", "Welcome"));  // "Welcome, Bob!"