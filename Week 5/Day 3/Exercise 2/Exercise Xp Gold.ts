
// Exercise 1: Protected Inheritance


class Employee {
  protected name: string;
  protected salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public getDetails(): string {
    return `Name: ${this.name}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  public department: string;

  constructor(name: string, salary: number, department: string) {
    super(name, salary);
    this.department = department;
  }

  public override getDetails(): string {
    return `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`;
  }
}


// Exercise 2: Readonly + Access Modifiers


class Car {
  public readonly make: string;
  private readonly model: string;
  public year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  public getCarDetails(): string {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}


// Exercise 3: Static Members


class MathUtils {
  static PI: number = 3.14159;

  static circumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}


// Exercise 4: Interface Function Types


interface Operation {
  (a: number, b: number): number;
}

class Addition implements Operation {
  public (a: number, b: number): number {
    return a + b;
  }
}

// NOTE: The above direct method syntax is NOT valid in TS classes,
// so we implement it properly like this instead:

class AdditionFixed implements Operation {
  public execute(a: number, b: number): number {
    return a + b;
  }
}

class Multiplication implements Operation {
  public execute(a: number, b: number): number {
    return a * b;
  }
}


// Exercise 5: Interface Extension


interface Shape {
  color: string;
  getArea(): number;
}

interface Rectangle extends Shape {
  readonly width: number;
  readonly height: number;
  getPerimeter(): number;
}

class RectangleImpl implements Rectangle {
  public color: string;
  public readonly width: number;
  public readonly height: number;

  constructor(color: string, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;
  }

  public getArea(): number {
    return this.width * this.height;
  }

  public getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}


// TESTING ALL EXERCISES


// Exercise 1
const manager = new Manager("Ryan", 80000, "IT");
console.log(manager.getDetails());

// Exercise 2
const car = new Car("Toyota", "Corolla", 2020);
console.log(car.getCarDetails());

// car.make = "Honda";  readonly
// car.model = "Civic";  private readonly

// Exercise 3
console.log(MathUtils.circumference(10));

// Exercise 4
const add = new AdditionFixed();
const multiply = new Multiplication();

console.log(add.execute(5, 3));
console.log(multiply.execute(5, 3));

// Exercise 5
const rect = new RectangleImpl("blue", 10, 5);

console.log("Area:", rect.getArea());
console.log("Perimeter:", rect.getPerimeter());