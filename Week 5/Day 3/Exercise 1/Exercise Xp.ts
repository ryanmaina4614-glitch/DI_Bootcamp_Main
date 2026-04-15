
// Exercise 1: Employee Class


class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(
    name: string,
    salary: number,
    position: string,
    department: string
  ) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  public getEmployeeInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}`;
  }
}


// Exercise 2: Product Class (readonly)


class Product {
  readonly id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  public getProductInfo(): string {
    return `Product: ${this.name}, Price: ${this.price}`;
  }
}


// Exercise 3: Inheritance


class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Some generic sound";
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): string {
    return "bark";
  }
}


// Exercise 4: Static Methods


class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}


// Exercise 5: Interfaces


interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log("ID:", user.id);
  console.log("Name:", user.name);
  console.log("Email:", user.email);
  console.log("Membership Level:", user.membershipLevel ?? "None");
}


// TESTING EVERYTHING


// Exercise 1 test
const emp = new Employee("Ryan Maina", 50000, "Developer", "IT");
console.log(emp.getEmployeeInfo());

// Exercise 2 test
const prod = new Product(1, "Laptop", 1200);
console.log(prod.getProductInfo());

// prod.id = 10;  (This will cause error because id is readonly)

// Exercise 3 test
const dog = new Dog("Buddy");
console.log(dog.name);
console.log(dog.makeSound());

// Exercise 4 test
console.log(Calculator.add(10, 5));
console.log(Calculator.subtract(10, 5));

// Exercise 5 test
const user: PremiumUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  membershipLevel: "Gold",
};

printUserDetails(user);