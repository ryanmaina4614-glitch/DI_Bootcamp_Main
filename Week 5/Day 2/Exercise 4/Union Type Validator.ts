

// 🌟 Union Type Validator


function validateUnionType(value: any, allowedTypes: string[]): boolean {
  // Loop through allowed types
  for (let i = 0; i < allowedTypes.length; i++) {
    if (typeof value === allowedTypes[i]) {
      return true;
    }
  }

  return false;
}


// Tests / Usage


// Test values
const value1 = 42;
const value2 = "Hello";
const value3 = true;
const value4 = { name: "Ryan" };
const value5 = [1, 2, 3];

// Allowed types
const allowed = ["number", "string"];

console.log(validateUnionType(value1, allowed)); // true
console.log(validateUnionType(value2, allowed)); // true
console.log(validateUnionType(value3, allowed)); // false
console.log(validateUnionType(value4, allowed)); // false
console.log(validateUnionType(value5, allowed)); // false