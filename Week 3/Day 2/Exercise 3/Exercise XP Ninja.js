
// 🌟 Exercise 1: Random Number


let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNum);

for (let i = 0; i <= randomNum; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



// 🌟 Exercise 2: Capitalized letters


function capitalize(str) {
    let even = "";
    let odd = "";

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            even += str[i].toUpperCase();
            odd += str[i].toLowerCase();
        } else {
            even += str[i].toLowerCase();
            odd += str[i].toUpperCase();
        }
    }

    return [even, odd];
}

console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']



// 🌟 Exercise 3: Palindrome


function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false



// 🌟 Exercise 4: Biggest Number


function biggestNumberInArray(arr) {
    if (arr.length === 0) return 0;

    let max = null;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (max === null || arr[i] > max) {
                max = arr[i];
            }
        }
    }

    return max !== null ? max : 0;
}

console.log(biggestNumberInArray([-1,0,3,100,99,2,99])); // 100
console.log(biggestNumberInArray(['a',3,4,2])); // 4
console.log(biggestNumberInArray([])); // 0



// 🌟 Exercise 5: Unique Elements


function uniqueElements(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(uniqueElements([1,2,3,3,3,4,5])); // [1,2,3,4,5]



// 🌟 Exercise 6: Calendar (DOM)
 

function createCalendar(year, month) {
    let table = document.createElement("table");

    // Days header
    let days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
    let headerRow = document.createElement("tr");

    for (let day of days) {
        let th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
    }

    table.appendChild(headerRow);

    let date = new Date(year, month - 1, 1);
    let firstDay = (date.getDay() + 6) % 7; // convert Sunday=0 → Monday=0

    let row = document.createElement("tr");

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement("td"));
    }

    while (date.getMonth() === month - 1) {
        let td = document.createElement("td");
        td.textContent = date.getDate();
        row.appendChild(td);

        if ((date.getDay() + 6) % 7 === 6) {
            table.appendChild(row);
            row = document.createElement("tr");
        }

        date.setDate(date.getDate() + 1);
    }

    if (row.children.length > 0) {
        table.appendChild(row);
    }

    document.body.appendChild(table);
}

// Example (run in browser)
// createCalendar(2012, 9);