
// 🌟 Exercise 1 : Giphy API


const url1 = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url1)
  .then(response => {
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));



// 🌟 Exercise 2 : Giphy API


const url2 = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url2)
  .then(response => {
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));



// 🌟 Exercise 3 : Async/Await


async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }

    const data = await response.json();
    console.log(data.result);
  } catch (error) {
    console.log(error);
  }
}

getStarship();



// 🌟 Exercise 4 : Analyze


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

/*
Expected Output:
calling
(wait 2 seconds)
resolved

Explanation:
- "calling" logs immediately
- await pauses execution for 2 seconds
- then "resolved" is logged
*/