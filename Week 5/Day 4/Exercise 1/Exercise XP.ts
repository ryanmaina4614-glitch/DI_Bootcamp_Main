// 🌟 Exercise 1: Intersection Types

type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
  name: "Ryan",
  age: 25,
  street: "Kenyatta Avenue",
  city: "Nairobi",
};

console.log("Exercise 1:", personWithAddress);


// 🌟 Exercise 2: Type Guards with Union Types

function describeValue(value: number | string): string {
  if (typeof value === "number") {
    return "This is a number";
  } else {
    return "This is a string";
  }
}

console.log("Exercise 2:", describeValue(10));
console.log("Exercise 2:", describeValue("Hello"));


// 🌟 Exercise 3: Type Casting

let someValue: any = "Hello TypeScript";
let strValue: string = someValue as string;

console.log("Exercise 3:", strValue.toUpperCase());


// 🌟 Exercise 4: Type Assertions with Union Types

function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}

console.log("Exercise 4:", getFirstElement(["Hello", 42, "World"]));
console.log("Exercise 4:", getFirstElement([100, "Test", 200]));


// 🌟 Exercise 5: Generic Constraints

function logLength<T extends { length: number }>(input: T): void {
  console.log("Exercise 5 Length:", input.length);
}

logLength("Hello");
logLength([1, 2, 3, 4]);


// 🌟 Exercise 6: Intersection Types and Type Guards

type Job = {
  position: string;
  department: string;
};

type Employee = Person & Job;

function describeEmployee(emp: Employee): string {
  if (emp.position === "Manager") {
    return `${emp.name} is a Manager in ${emp.department}`;
  } else if (emp.position === "Developer") {
    return `${emp.name} is a Developer in ${emp.department}`;
  } else {
    return `${emp.name} works as a ${emp.position} in ${emp.department}`;
  }
}

const emp1: Employee = {
  name: "Alice",
  age: 30,
  position: "Manager",
  department: "HR",
};

const emp2: Employee = {
  name: "Bob",
  age: 28,
  position: "Developer",
  department: "IT",
};

console.log("Exercise 6:", describeEmployee(emp1));
console.log("Exercise 6:", describeEmployee(emp2));


// 🌟 Exercise 7: Type Assertions and Generic Constraints

function formatInput<T extends { toString(): string }>(input: T): string {
  const str = input as unknown as string;
  return `Formatted: ${str.toString()}`;
}

console.log("Exercise 7:", formatInput(123));
console.log("Exercise 7:", formatInput(true));
console.log("Exercise 7:", formatInput("Final Exercise"));