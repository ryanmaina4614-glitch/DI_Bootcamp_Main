
// 🌟 Exercise 1 : is_Blank


function isBlank(str) {
    return str.length === 0;
}

console.log(isBlank(''));     // true
console.log(isBlank('abc'));  // false



// 🌟 Exercise 2 : Abbrev_name


function abbrevName(name) {
    let parts = name.split(" ");
    return parts[0] + " " + parts[1][0] + ".";
}

console.log(abbrevName("Robin Singh")); // Robin S.



// 🌟 Exercise 3 : SwapCase


function swapCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

console.log(swapCase("The Quick Brown Fox"));
// tHE qUICK bROWN fOX



// 🌟 Exercise 4 : Omnipresent value


function isOmnipresent(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].includes(value)) {
            return false;
        }
    }
    return true;
}

console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 1)); // true
console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 6)); // false


// 🌟 Exercise 5 : Red table (DOM)


/*
HTML REQUIRED (already provided)

Add this JS inside <script> tag
*/

let table = document.body.firstElementChild;

// Loop through rows
for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];

    // Color diagonal cell (same index)
    let cell = row.cells[i];
    cell.style.backgroundColor = "red";
}