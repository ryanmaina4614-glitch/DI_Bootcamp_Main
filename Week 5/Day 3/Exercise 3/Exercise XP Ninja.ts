
// Exercise 1: Advanced Inheritance + Access Modifiers


class Employee {
  public name: string;
  private age: number;
  protected salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  protected calculateBonus(): number {
    return this.salary * 0.1;
  }
}

class Manager extends Employee {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  public getSalaryDetails(): string {
    const bonus = this.calculateBonus();
    return `Salary: ${this.salary}, Bonus: ${bonus}`;
  }
}

class ExecutiveManager extends Manager {
  public approveBudget(amount: number): string {
    return `Budget of ${amount} approved by ${this.name}`;
  }
}


// Exercise 2: Static Properties + Methods


class Shape {
  static totalShapes: number = 0;

  constructor() {
    Shape.totalShapes++;
  }

  static getType(): string {
    return "Generic Shape";
  }
}

class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  static override getType(): string {
    return "Circle";
  }

  public area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  public side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }

  static override getType(): string {
    return "Square";
  }

  public area(): number {
    return this.side * this.side;
  }
}


// Exercise 3: Complex Interface with Function Types


interface Calculator {
  a: number;
  b: number;
  operate(fn: (a: number, b: number) => number): number;
}

class AdvancedCalculator implements Calculator {
  a: number;
  b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  operate(fn: (a: number, b: number) => number): number {
    return fn(this.a, this.b);
  }

  add(): number {
    return this.a + this.b;
  }

  subtract(): number {
    return this.a - this.b;
  }

  multiply(): number {
    return this.a * this.b;
  }
}


// Exercise 4: Readonly in Inheritance


class Device {
  constructor(public readonly serialNumber: string) {}

  getInfo(): string {
    return `Serial Number: ${this.serialNumber}`;
  }
}

class Laptop extends Device {
  public model: string;
  public price: number;

  constructor(serialNumber: string, model: string, price: number) {
    super(serialNumber);
    this.model = model;
    this.price = price;
  }

  override getInfo(): string {
    return `Serial: ${this.serialNumber}, Model: ${this.model}, Price: ${this.price}`;
  }
}

// Exercise 5: Multiple Interface Extension


interface Product {
  readonly name: string;
  price: number;
  discount?: number;
}

interface Electronics extends Product {
  warrantyPeriod: number;
}

class Smartphone implements Electronics {
  readonly name: string;
  price: number;
  discount?: number;
  warrantyPeriod: number;

  constructor(
    name: string,
    price: number,
    warrantyPeriod: number,
    discount?: number
  ) {
    this.name = name;
    this.price = price;
    this.warrantyPeriod = warrantyPeriod;
    this.discount = discount;
  }

  getFinalPrice(): number {
    if (this.discount) {
      return this.price - this.price * (this.discount / 100);
    }
    return this.price;
  }
}


// TESTING ALL EXERCISES


// Exercise 1
const exec = new ExecutiveManager("Ryan", 30, 100000);
console.log(exec.getSalaryDetails());
console.log(exec.approveBudget(50000));

// Exercise 2
const c1 = new Circle(5);
const s1 = new Square(4);

console.log(Circle.getType());
console.log(Square.getType());
console.log("Total Shapes:", Shape.totalShapes);
console.log("Circle Area:", c1.area());
console.log("Square Area:", s1.area());

// Exercise 3
const calc = new AdvancedCalculator(10, 5);

console.log(calc.operate((a, b) => a + b));
console.log(calc.operate((a, b) => a * b));

// Exercise 4
const laptop = new Laptop("SN12345", "Dell XPS", 1500);
console.log(laptop.getInfo());

// laptop.serialNumber = "NEW";  readonly

// Exercise 5
const phone = new Smartphone("iPhone 15", 1200, 2, 10);

console.log("Final Price:", phone.getFinalPrice());
console.log("Warranty:", phone.warrantyPeriod);