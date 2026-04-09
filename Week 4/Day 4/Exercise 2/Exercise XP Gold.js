// 🌟 Exercise 1 : Promise.all()

const promise1 = Promise.resolve(3);
const promise2 = 42; // not a promise, but will be treated as Promise.resolve(42)
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // [3, 42, "foo"]
  })
  .catch(error => {
    console.log(error);
  });

/*
Explanation:
- Promise.all() takes an array of promises (or values).
- It waits until ALL promises are resolved.
- If all succeed → returns an array of results in the same order.
- If ANY promise rejects → it immediately rejects.

Why this output?
- promise1 resolves → 3
- promise2 is a normal value → treated as resolved → 42
- promise3 resolves after 3 seconds → "foo"
- Final output: [3, 42, "foo"]
*/


// 🌟 Exercise 2 : Analyse Promise.all()

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result); // [2, 4, 6]
  });

/*
Explanation:
- map() creates an array of promises:
  [Promise(2), Promise(4), Promise(6)]
- Promise.all() waits for all to resolve
- Each value is doubled
- Final output: [2, 4, 6]
*/