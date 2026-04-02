
//  Coloring Squares Game


const palette = document.getElementById("palette");
const grid = document.getElementById("grid");

// Available colors
const colors = [
  "red", "blue", "green", "yellow", "black", "purple",
  "orange", "pink", "brown", "gray", "cyan", "lime"
];

let currentColor = "black";
let isDrawing = false;



// Create Color Palette

colors.forEach(color => {
  const colorDiv = document.createElement("div");
  colorDiv.classList.add("color");
  colorDiv.style.backgroundColor = color;

  colorDiv.addEventListener("click", () => {
    currentColor = color;
  });

  palette.appendChild(colorDiv);
});



// Create Grid


for (let i = 0; i < 400; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  // Draw on click + drag
  cell.addEventListener("mousedown", () => {
    isDrawing = true;
    cell.style.backgroundColor = currentColor;
  });

  cell.addEventListener("mouseover", () => {
    if (isDrawing) {
      cell.style.backgroundColor = currentColor;
    }
  });

  cell.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  grid.appendChild(cell);
}



// Stop drawing when mouse released anywhere


document.body.addEventListener("mouseup", () => {
  isDrawing = false;
});