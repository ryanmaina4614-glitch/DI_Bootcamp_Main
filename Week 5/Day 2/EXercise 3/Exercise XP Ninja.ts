
// 🌟 Exercise 1: Conditional Types


// Define conditional type
type MappedType<T> = T extends number ? number : T extends string ? number : never;

//  Function implementation
function mapType<T extends number | string>(value: T): MappedType<T> {
  if (typeof value === "number") {
    return (value * value) as MappedType<T>; // square
  } else {
    return (value.length) as MappedType<T>; // string length
  }
}

//  Tests
console.log(mapType(5));        // 25
console.log(mapType("hello"));  // 5




// 🌟 Exercise 2: keyof & Lookup Types


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

//  Test object
const person = {
  name: "Ryan",
  age: 22,
  isStudent: true
};

//  Tests
console.log(getProperty(person, "name"));      // "Ryan"
console.log(getProperty(person, "age"));       // 22
console.log(getProperty(person, "isStudent")); // true




// 🌟 Exercise 3: Interface with Numeric Properties


//  Interface
interface HasNumericProperty {
  [key: string]: number;
}

//  Function
function multiplyProperty<T extends HasNumericProperty>(
  obj: T,
  key: keyof T,
  factor: number
): number {
  return obj[key] * factor;
}

//  Test objects
const stats = {
  score: 10,
  level: 2,
  health: 100
};

const product = {
  price: 50,
  quantity: 3
};

//  Tests
console.log(multiplyProperty(stats, "score", 2));    // 20
console.log(multiplyProperty(stats, "health", 0.5)); // 50
console.log(multiplyProperty(product, "price", 3));  // 150