import "./style.css";

import { v4 as uuidv4 } from "uuid";

import RecipeItem from "./model/RecipeItem";
import RecipeCollection from "./model/RecipeCollection";
import RecipeTemplate from "./templates/RecipeTemplate";

document.querySelector<HTMLDivElement>(
  "#app"
)!.innerHTML = `
<div class="recipe-app">
  <h1>Recipe Book</h1>

  <form id="recipeEntryForm">
    <input
      type="text"
      id="recipeTitle"
      placeholder="Recipe Title"
      required
    />

    <textarea
      id="ingredients"
      placeholder="Enter ingredients (one per line)"
      required
    ></textarea>

    <textarea
      id="instructions"
      placeholder="Enter cooking instructions"
      required
    ></textarea>

    <button type="submit">
      Add Recipe
    </button>
  </form>

  <div id="recipeContainer"></div>

  <button id="clearRecipesButton">
    Clear All Recipes
  </button>
</div>
`;

const recipeCollection =
  RecipeCollection.getInstance();

const recipeTemplate =
  new RecipeTemplate();

recipeTemplate.render();

const recipeForm =
  document.getElementById(
    "recipeEntryForm"
  ) as HTMLFormElement;

recipeForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    const titleInput =
      document.getElementById(
        "recipeTitle"
      ) as HTMLInputElement;

    const ingredientsInput =
      document.getElementById(
        "ingredients"
      ) as HTMLTextAreaElement;

    const instructionsInput =
      document.getElementById(
        "instructions"
      ) as HTMLTextAreaElement;

    const recipe = new RecipeItem(
      uuidv4(),
      titleInput.value,
      ingredientsInput.value
        .split("\n")
        .filter((item) => item.trim() !== ""),
      instructionsInput.value,
      false
    );

    recipeCollection.addRecipe(recipe);

    recipeTemplate.render();

    recipeForm.reset();
  }
);

const clearButton =
  document.getElementById(
    "clearRecipesButton"
  ) as HTMLButtonElement;

clearButton.addEventListener(
  "click",
  () => {
    const confirmed = confirm(
      "Are you sure you want to delete all recipes?"
    );

    if (confirmed) {
      recipeCollection.clearRecipes();
      recipeTemplate.render();
    }
  }
);