
// Solar System Assignment


// Select the section from HTML
const section = document.querySelector(".listPlanets");


// Data (Array of Objects)
// Using objects because each planet has properties (color + moons)

const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 4 },
    { name: "Saturn", color: "gold", moons: 3 },
    { name: "Uranus", color: "lightblue", moons: 2 },
    { name: "Neptune", color: "darkblue", moons: 1 }
];

// Create Planets + Moons


planets.forEach(planetData => {

    // Create planet div
    const planet = document.createElement("div");
    planet.classList.add("planet");

    // Add unique color
    planet.style.backgroundColor = planetData.color;

    // Optional: show planet name
    planet.textContent = planetData.name;

    
    // Create Moons (Bonus)
    
    
    for (let i = 0; i < planetData.moons; i++) {
        const moon = document.createElement("div");
        moon.classList.add("moon");

        // Position moons randomly around planet
        moon.style.top = Math.random() * 70 + "px";
        moon.style.left = Math.random() * 70 + "px";

        planet.appendChild(moon);
    }

    // Append planet to section
    section.appendChild(planet);
});