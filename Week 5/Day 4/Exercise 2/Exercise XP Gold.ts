// 🌟 Exercise 1: Intersection Types + Type Guards

interface User {
  name: string;
  email: string;
}

interface Admin {
  adminLevel: number;
}

type AdminUser = User & Admin;

function getProperty(obj: AdminUser, prop: string): any {
  if (prop in obj) {
    return obj[prop as keyof AdminUser];
  }
  return undefined;
}

const adminUser: AdminUser = {
  name: "Ryan",
  email: "ryan@example.com",
  adminLevel: 2,
};

console.log("Exercise 1:", getProperty(adminUser, "name"));
console.log("Exercise 1:", getProperty(adminUser, "adminLevel"));
console.log("Exercise 1:", getProperty(adminUser, "unknown"));


// 🌟 Exercise 2: Type Casting with Generics

function castToType<T>(value: any, constructor: { new (...args: any[]): T }): T {
  return new constructor(value);
}

// Examples
const num = castToType<number>("123", Number as any);
const bool = castToType<boolean>("true", Boolean as any);

console.log("Exercise 2:", num, typeof num);
console.log("Exercise 2:", bool, typeof bool);


// 🌟 Exercise 3: Type Assertions + Generic Constraints

function getArrayLength<T extends number[] | string[]>(arr: T): number {
  const array = arr as Array<number | string>;
  return array.length;
}

console.log("Exercise 3:", getArrayLength([1, 2, 3]));
console.log("Exercise 3:", getArrayLength(["a", "b", "c"]));


// 🌟 Exercise 4: Generic Interface + Class

interface Storage<T> {
  add(item: T): void;
  get(index: number): T | undefined;
}

class Box<T> implements Storage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T | undefined {
    return this.items[index];
  }
}

// Test
const numberBox = new Box<number>();
numberBox.add(10);
numberBox.add(20);

const stringBox = new Box<string>();
stringBox.add("Hello");
stringBox.add("World");

console.log("Exercise 4:", numberBox.get(0));
console.log("Exercise 4:", stringBox.get(1));


// 🌟 Exercise 5: Generic Class with Constraints

interface Item<T> {
  value: T;
}

class Queue<T> {
  private items: Item<T>[] = [];

  add(item: Item<T>): void {
    this.items.push(item);
  }

  remove(): Item<T> | undefined {
    return this.items.shift();
  }
}

// Test
const numberQueue = new Queue<number>();
numberQueue.add({ value: 1 });
numberQueue.add({ value: 2 });

const stringQueue = new Queue<string>();
stringQueue.add({ value: "A" });
stringQueue.add({ value: "B" });

console.log("Exercise 5:", numberQueue.remove());
console.log("Exercise 5:", stringQueue.remove());