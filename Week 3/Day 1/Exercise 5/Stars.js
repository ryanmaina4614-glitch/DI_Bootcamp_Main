
// 🌟 Pattern Output
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

//  Solution 1: Using ONE loop


let stars = "";

for (let i = 1; i <= 6; i++) {
    stars += "* ";
    console.log(stars);
}


// ==========================
//  Solution 2: Using NESTED loops
// ==========================

for (let i = 1; i <= 6; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}