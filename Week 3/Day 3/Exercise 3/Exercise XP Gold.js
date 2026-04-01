
// 🌟 Exercise 1: Select a kind of Music


const genres = document.getElementById("genres");

// Display selected value
console.log(genres.value);

// Add new option "Classic"
const newOption = document.createElement("option");
newOption.value = "classic";
newOption.textContent = "Classic";

// Add and select it
genres.appendChild(newOption);
genres.value = "classic";



// 🌟 Exercise 2: Delete colors


const colorSelect = document.getElementById("colorSelect");
const removeBtn = document.querySelector('input[type="button"]');

// Function to remove selected color
function removecolor() {
    const selectedIndex = colorSelect.selectedIndex;
    if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
    }
}

// Event listener
removeBtn.addEventListener("click", removecolor);



// 🌟 Exercise 3: Create a shopping list


const root = document.getElementById("root");

// Shopping list array
let shoppingList = [];

// Create form
const form = document.createElement("form");

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter item";

const addButton = document.createElement("button");
addButton.textContent = "AddItem";

form.appendChild(input);
form.appendChild(addButton);

// Create ClearAll button
const clearButton = document.createElement("button");
clearButton.textContent = "ClearAll";

// Create list display
const ul = document.createElement("ul");

// Add elements to DOM
root.appendChild(form);
root.appendChild(clearButton);
root.appendChild(ul);



// Add Item Function


function addItem(event) {
    event.preventDefault();

    const value = input.value.trim();

    if (value === "") {
        alert("Please enter an item");
        return;
    }

    // Add to array
    shoppingList.push(value);

    // Add to DOM
    const li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);

    // Clear input
    input.value = "";
}

// Event listener for adding item
form.addEventListener("submit", addItem);


// Clear All Function


function clearAll() {
    shoppingList = [];
    ul.innerHTML = "";
}

// Event listener for clearing list
clearButton.addEventListener("click", clearAll);