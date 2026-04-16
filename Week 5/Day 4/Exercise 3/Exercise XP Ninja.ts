// 🌟 Exercise 1: Generics + Intersection Types

type WithId = { id: number };
type WithName = { name: string };

class Container<T extends WithId & WithName> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  list(): T[] {
    return this.items;
  }
}

// Test
const container = new Container<{ id: number; name: string; role: string }>();

container.add({ id: 1, name: "Ryan", role: "Admin" });
container.add({ id: 2, name: "Alice", role: "User" });

console.log("Exercise 1:", container.list());
container.remove(1);
console.log("Exercise 1 after remove:", container.list());


// 🌟 Exercise 2: Generic Interfaces + Type Casting

interface Response<T> {
  status: number;
  data: unknown;
}

function parseResponse<T>(response: Response<T>): T {
  return response.data as T; // type casting
}

// Test
const apiResponse: Response<string> = {
  status: 200,
  data: "Hello API",
};

const parsedData = parseResponse<string>(apiResponse);
console.log("Exercise 2:", parsedData);


// 🌟 Exercise 3: Generic Classes + Type Assertions

class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T {
    return this.items[index] as T; // type assertion
  }

  list(): T[] {
    return this.items;
  }
}

// Test
const repo = new Repository<number>();

repo.add(10);
repo.add(20);

console.log("Exercise 3 get:", repo.get(0));
console.log("Exercise 3 list:", repo.list());