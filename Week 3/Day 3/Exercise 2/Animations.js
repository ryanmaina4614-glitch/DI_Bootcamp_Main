
// 🌟 Exercise 1: Timer


// Part I: Alert after 2 seconds
setTimeout(() => {
    alert("Hello World");
}, 2000);


// Part II: Add one paragraph after 2 seconds
setTimeout(() => {
    const container = document.getElementById("container");

    const p = document.createElement("p");
    p.textContent = "Hello World";

    container.appendChild(p);
}, 2000);


// Part III: Add paragraph every 2 seconds
const container = document.getElementById("container");
const button = document.getElementById("clear");

let count = 0;

const interval = setInterval(() => {
    const p = document.createElement("p");
    p.textContent = "Hello World";

    container.appendChild(p);
    count++;

    // Stop when 5 paragraphs are added
    if (count === 5) {
        clearInterval(interval);
    }

}, 2000);

// Stop interval when button is clicked
button.addEventListener("click", () => {
    clearInterval(interval);
});



// 🌟 Exercise 2: Move the box


function myMove() {
    const box = document.getElementById("animate");
    let position = 0;

    const interval = setInterval(frame, 1);

    function frame() {
        // Stop at right edge (container width - box width = 350px)
        if (position >= 350) {
            clearInterval(interval);
        } else {
            position++;
            box.style.left = position + "px";
        }
    }
}