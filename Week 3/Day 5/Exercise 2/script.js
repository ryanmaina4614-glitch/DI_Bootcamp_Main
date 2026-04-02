
// 🥁 Drum Kit

// Play sound function
function playSound(key) {
    const audio = document.getElementById(key);

    if (!audio) return;

    audio.currentTime = 0; // rewind
    audio.play();

    // Add animation
    const button = document.querySelector(`[data-key="${key}"]`);
    button.classList.add("playing");

    setTimeout(() => {
        button.classList.remove("playing");
    }, 100);
}



// Keyboard Event


document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();
    playSound(key);
});



// Mouse Click Event


const buttons = document.querySelectorAll(".drum");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const key = this.getAttribute("data-key");
        playSound(key);
    });
});