
// 🌟 Exercise 1 : Divisible by 23


function displayNumbersDivisible(divisor = 23) {
    let sum = 0;
    let result = "";

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            result += i + " ";
            sum += i;
        }
    }

    console.log(result.trim());
    console.log("Sum:", sum);
}

// Call function
displayNumbersDivisible();     // default 23
displayNumbersDivisible(3);    // bonus
displayNumbersDivisible(45);   // bonus



// 🌟 Exercise 2 : Shopping List


const stock = { 
    banana: 6, 
    apple: 0,
    pear: 12,
    orange: 32,
    blueberry: 1
};

const prices = {    
    banana: 4, 
    apple: 2, 
    pear: 1,
    orange: 1.5,
    blueberry: 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;

    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            stock[item]--; // bonus: decrease stock
        }
    }

    return total;
}

console.log("Total bill:", myBill());



// 🌟 Exercise 3 : Change Enough


function changeEnough(itemPrice, amountOfChange) {
    let total =
        amountOfChange[0] * 0.25 +
        amountOfChange[1] * 0.10 +
        amountOfChange[2] * 0.05 +
        amountOfChange[3] * 0.01;

    return total >= itemPrice;
}

// Examples
console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true



// 🌟 Exercise 4 : Vacation Costs


// BONUS version (all prompts in one place)

function hotelCost(nights) {
    return nights * 140;
}

function planeRideCost(destination) {
    destination = destination.toLowerCase();

    if (destination === "london") return 183;
    if (destination === "paris") return 220;
    return 300;
}

function rentalCarCost(days) {
    let cost = days * 40;

    if (days > 10) {
        cost *= 0.95; // 5% discount
    }

    return cost;
}

function totalVacationCost() {
    let nights = Number(prompt("How many nights?"));
    while (isNaN(nights) || nights <= 0) {
        nights = Number(prompt("Enter a valid number of nights:"));
    }

    let destination = prompt("Enter destination:");
    while (!destination) {
        destination = prompt("Enter a valid destination:");
    }

    let days = Number(prompt("How many rental days?"));
    while (isNaN(days) || days <= 0) {
        days = Number(prompt("Enter a valid number of days:"));
    }

    let hotel = hotelCost(nights);
    let plane = planeRideCost(destination);
    let car = rentalCarCost(days);

    console.log(`Hotel: $${hotel}, Plane: $${plane}, Car: $${car}`);
    console.log("Total Vacation Cost:", hotel + plane + car);
}

// Call it (browser only)
// totalVacationCost();


// 🌟 Exercise 5 : Users (DOM)


/*
HTML REQUIRED:

<div id="container">Users:</div>
<ul class="list">
    <li>John</li>
    <li>Pete</li>
</ul>
<ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
</ul>
*/

// JS:

// Get div
let div = document.getElementById("container");
console.log(div);

// Change Pete → Richard
document.querySelectorAll(".list")[0].children[1].textContent = "Richard";

// Delete Sarah
document.querySelectorAll(".list")[1].children[1].remove();

// Change first names to yours
let lists = document.querySelectorAll(".list");
for (let ul of lists) {
    ul.children[0].textContent = "Ryan";
}

// Add classes
for (let ul of lists) {
    ul.classList.add("student_list");
}
lists[0].classList.add("university", "attendance");

// Style div
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// Hide Dan
document.querySelectorAll(".list")[1].children[1].style.display = "none";

// Border Richard
document.querySelectorAll(".list")[0].children[1].style.border = "1px solid black";

// Change font size
document.body.style.fontSize = "20px";



// 🌟 Exercise 6 : Navbar


/*
HTML REQUIRED:

<div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div>
*/

// Change id
let nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

// Add Logout
let newLi = document.createElement("li");
let text = document.createTextNode("Logout");
newLi.appendChild(text);
nav.querySelector("ul").appendChild(newLi);

// First & last items
let first = nav.querySelector("ul").firstElementChild;
let last = nav.querySelector("ul").lastElementChild;

console.log(first.textContent);
console.log(last.textContent);



// 🌟 Exercise 7 : My Book List


/*
HTML REQUIRED:

<section class="listBooks"></section>
*/

let allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://via.placeholder.com/100",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://via.placeholder.com/100",
        alreadyRead: false
    }
];

let section = document.querySelector(".listBooks");

for (let book of allBooks) {
    let divBook = document.createElement("div");

    let text = document.createElement("p");
    text.textContent = `${book.title} written by ${book.author}`;

    let img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";

    if (book.alreadyRead) {
        text.style.color = "red";
    }

    divBook.appendChild(text);
    divBook.appendChild(img);
    section.appendChild(divBook);
}