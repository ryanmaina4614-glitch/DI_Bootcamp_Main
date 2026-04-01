
// 🌟 Daily Challenge: Show Only Letters

// Create input field
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Type letters only...";

// Add to DOM
document.body.appendChild(input);



// Event Listener (input event)


input.addEventListener("input", function () {

    // Replace anything that is NOT a letter (a-z, A-Z)
    this.value = this.value.replace(/[^a-zA-Z]/g, "");

});