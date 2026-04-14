const img = document.getElementById("pokemon-img");
const nameEl = document.getElementById("name");
const idEl = document.getElementById("id");
const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const typeEl = document.getElementById("type");
const message = document.getElementById("message");

const randomBtn = document.getElementById("random");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentId = 1;

// 🔥 Fetch function
async function fetchPokemon(id) {
  try {
    message.textContent = "Loading...";

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) throw new Error("Not found");

    const data = await res.json();

    // Display data
    img.src = data.sprites.front_default;
    nameEl.textContent = data.name.toUpperCase();
    idEl.textContent = `ID: ${data.id}`;
    heightEl.textContent = `Height: ${data.height}`;
    weightEl.textContent = `Weight: ${data.weight}`;
    typeEl.textContent = `Type: ${data.types[0].type.name}`;

    currentId = data.id;
    message.textContent = "";
  } catch (error) {
    message.textContent = "Oh no! That Pokemon isn’t available…";
  }
}

// 🎲 Random Pokémon
randomBtn.addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * 898) + 1;
  fetchPokemon(randomId);
});

// ⬅️ Previous
prevBtn.addEventListener("click", () => {
  if (currentId > 1) {
    fetchPokemon(currentId - 1);
  }
});

// ➡️ Next
nextBtn.addEventListener("click", () => {
  fetchPokemon(currentId + 1);
});

// Load first Pokémon
fetchPokemon(1);
