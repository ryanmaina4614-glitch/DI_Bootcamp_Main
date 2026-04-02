
// 🌟 Exercise 1 : Nested functions


//  Prediction:
// flat(4) → "____"
// mountain(4) → "/''''\"
// flat(4) → "____"
// Final result → "____/''''\____"

// Explanation:
// - flat adds "_" x times
// - mountain adds "/" + "'" repeated + "\"
// - All modify the same 'result' variable (closure)


// Converted to arrow functions

const landscape = () => {

  let result = "";

  const flat = (x) => {
    for (let count = 0; count < x; count++) {
      result += "_";
    }
  };

  const mountain = (x) => {
    result += "/";
    for (let counter = 0; counter < x; counter++) {
      result += "'";
    }
    result += "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

console.log(landscape()); // "____/''''\____"




// 🌟 Exercise 2 : Closure


// Prediction:
// addTo(10) returns a function
// addToTen(3) → 10 + 3 = 13

const addTo = x => y => x + y;
const addToTen = addTo(10);

console.log(addToTen(3)); // 13

// Explanation:
// Closure remembers x = 10 even after function finishes




// 🌟 Exercise 3 : Currying


//  Prediction:
// curriedSum(30)(1) → 30 + 1 = 31

const curriedSum1 = (a) => (b) => a + b;

console.log(curriedSum1(30)(1)); // 31




// 🌟 Exercise 4 : Currying


//  Prediction:
// add5 = curriedSum(5)
// add5(12) → 5 + 12 = 17

const curriedSum2 = (a) => (b) => a + b;

const add5 = curriedSum2(5);

console.log(add5(12)); // 17

// Explanation:
// Function is partially applied (a = 5 stored)




// 🌟 Exercise 5 : Composing


//  Prediction:
// compose(add1, add5)(10)
// → add1(add5(10))
// → add1(15)
// → 16

const compose = (f, g) => (a) => f(g(a));

const add1 = (num) => num + 1;
const add5Func = (num) => num + 5;

console.log(compose(add1, add5Func)(10)); // 16




//  SUMMARY (important concepts)


// Closure → function remembers outer variables
// Currying → function returning another function
// Composition → combining functions (f(g(x)))
// Nested functions → inner functions access outer variables