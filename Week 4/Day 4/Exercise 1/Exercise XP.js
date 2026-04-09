// 🌟 Exercise 1 : Comparison

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }
  });
}

// Tests
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));


// 🌟 Exercise 2 : Promises

const delayedSuccess = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

delayedSuccess.then(result => console.log(result));


// 🌟 Exercise 3 : Resolve & Reject

// Resolve with value 3
const resolvedPromise = Promise.resolve(3);
resolvedPromise.then(value => console.log(value));

// Reject with "Boo!"
const rejectedPromise = Promise.reject("Boo!");
rejectedPromise.catch(error => console.log(error));