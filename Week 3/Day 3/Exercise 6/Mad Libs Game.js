
// 🌟 Exercise: Mad Libs Game


// Get elements
const form = document.getElementById("libform");
const storySpan = document.getElementById("story");

// Inputs
const nounInput = document.getElementById("noun");
const adjectiveInput = document.getElementById("adjective");
const personInput = document.getElementById("person");
const verbInput = document.getElementById("verb");
const placeInput = document.getElementById("place");

// Store values for shuffle feature
let currentValues = null;


// Story Generator Function


function generateStory(values) {
    const { noun, adjective, person, verb, place } = values;

    const stories = [
        `${person} went to ${place} with a ${adjective} ${noun} and decided to ${verb} all day.`,
        `In ${place}, ${person} found a ${adjective} ${noun} that could ${verb}!`,
        `One day, ${person} saw a ${adjective} ${noun} at ${place} and started to ${verb} immediately.`
    ];

    // Pick random story
    const randomIndex = Math.floor(Math.random() * stories.length);
    return stories[randomIndex];
}



// Handle Form Submission


form.addEventListener("submit", function(event) {
    event.preventDefault();

    const values = {
        noun: nounInput.value.trim(),
        adjective: adjectiveInput.value.trim(),
        person: personInput.value.trim(),
        verb: verbInput.value.trim(),
        place: placeInput.value.trim()
    };

    // Validate inputs
    if (
        values.noun === "" ||
        values.adjective === "" ||
        values.person === "" ||
        values.verb === "" ||
        values.place === ""
    ) {
        alert("Please fill in all fields!");
        return;
    }

    // Save values for shuffle
    currentValues = values;

    // Generate and display story
    storySpan.textContent = generateStory(values);
});



// BONUS: Shuffle Button


// Create shuffle button dynamically
const shuffleBtn = document.createElement("button");
shuffleBtn.textContent = "Shuffle Story";
document.body.appendChild(shuffleBtn);

// Shuffle logic
shuffleBtn.addEventListener("click", function() {
    if (!currentValues) {
        alert("Please fill the form first!");
        return;
    }

    storySpan.textContent = generateStory(currentValues);
});