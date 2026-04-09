
// 🌟 1st Daily Challenge


function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    const allStrings = words.every(word => typeof word === "string");

    if (!allStrings) {
      reject("Error: Not all items are strings");
    } else {
      const uppercased = words.map(word => word.toUpperCase());
      resolve(uppercased);
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Error: Array length is less than or equal to 4");
    }
  });
}

// Tests
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result)) // ["APPLE","BANANA","KIWI","MELON","PEAR"]
  .catch(error => console.log(error));



// 🌟 2nd Daily Challenge


const morse = `{
  "a": ".-","b": "-...","c": "-.-.","d": "-..","e": ".",
  "f": "..-.","g": "--.","h": "....","i": "..","j": ".---",
  "k": "-.-","l": ".-..","m": "--","n": "-.","o": "---",
  "p": ".--.","q": "--.-","r": ".-.","s": "...","t": "-",
  "u": "..-","v": "...-","w": ".--","x": "-..-","y": "-.--","z": "--.."
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);

    if (Object.keys(morseJS).length === 0) {
      reject("Error: Morse object is empty");
    } else {
      resolve(morseJS);
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:").toLowerCase();

    const translation = [];

    for (let char of userInput) {
      if (char === " ") {
        translation.push("/"); // space separator
      } else if (!morseJS[char]) {
        reject(`Error: Character "${char}" not found in Morse`);
        return;
      } else {
        translation.push(morseJS[char]);
      }
    }

    resolve(translation);
  });
}

function joinWords(morseTranslation) {
  const output = morseTranslation.join("\n");
  document.body.innerHTML += `<pre>${output}</pre>`;
}

// Chain functions
toJs()
  .then(morseJS => toMorse(morseJS))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(error => console.log(error));