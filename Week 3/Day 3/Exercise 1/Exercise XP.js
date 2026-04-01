
// 🌟 Exercise 1 : Change the article


// Retrieve h1 and log it
const h1 = document.querySelector("h1");
console.log(h1);

// Remove last paragraph
const article = document.querySelector("article");
const lastParagraph = article.lastElementChild;
article.removeChild(lastParagraph);

// Change h2 background color on click
const h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
});

// Hide h3 on click
const h3 = document.querySelector("h3");
h3.addEventListener("click", () => {
    h3.style.display = "none";
});

// Make all paragraphs bold on button click
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => {
        p.style.fontWeight = "bold";
    });
});

// BONUS: Random font size on hover for h1
h1.addEventListener("mouseover", () => {
    const randomSize = Math.floor(Math.random() * 100) + "px";
    h1.style.fontSize = randomSize;
});

// BONUS: Fade out 2nd paragraph
const secondParagraph = document.querySelectorAll("p")[1];
secondParagraph.addEventListener("mouseover", () => {
    secondParagraph.style.transition = "opacity 0.5s";
    secondParagraph.style.opacity = "0";
});



// 🌟 Exercise 2 : Work with forms


// Retrieve form
const form = document.querySelector("form");
console.log(form);

// Retrieve inputs by id
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
console.log(fname, lname);

// Retrieve inputs by name
const firstNameInput = document.getElementsByName("firstname")[0];
const lastNameInput = document.getElementsByName("lastname")[0];
console.log(firstNameInput, lastNameInput);

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const firstNameValue = fname.value.trim();
    const lastNameValue = lname.value.trim();

    if (firstNameValue === "" || lastNameValue === "") {
        alert("Please fill in both fields");
        return;
    }

    const ul = document.querySelector(".usersAnswer");

    // Clear previous results (optional)
    ul.innerHTML = "";

    const li1 = document.createElement("li");
    li1.textContent = firstNameValue;

    const li2 = document.createElement("li");
    li2.textContent = lastNameValue;

    ul.appendChild(li1);
    ul.appendChild(li2);
});



// 🌟 Exercise 3 : Transform the sentence


// Global variable
let allBoldItems;

// Get all bold items
function getBoldItems() {
    allBoldItems = document.querySelectorAll("strong");
}

// Highlight bold text
function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = "blue";
    });
}

// Return to default color
function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = "black";
    });
}

// Apply events
const paragraph = document.querySelector("p");

getBoldItems();

paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);



// 🌟 Exercise 4 : Volume of a sphere


const sphereForm = document.getElementById("MyForm");

sphereForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const radiusInput = document.getElementById("radius");
    const volumeInput = document.getElementById("volume");

    const radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid radius");
        return;
    }

    // Volume formula: (4/3) * π * r³
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    volumeInput.value = volume.toFixed(2);
});