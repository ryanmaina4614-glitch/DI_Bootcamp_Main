import RecipeCollection from "../model/RecipeCollection";

export default class RecipeTemplate {
  private container: HTMLDivElement;

  constructor() {
    this.container = document.querySelector(
      "#recipeContainer"
    ) as HTMLDivElement;
  }

  public render(): void {
    const recipeCollection =
      RecipeCollection.getInstance();

    const recipes =
      recipeCollection.getRecipes();

    this.container.innerHTML = "";

    recipes.forEach((recipe) => {
      const card = document.createElement("div");
      card.className = "recipe-card";

      const title = document.createElement("h3");
      title.textContent = recipe.title;

      const favoriteButton =
        document.createElement("button");

      favoriteButton.textContent =
        recipe.isFavorite
          ? "★ Favorite"
          : "☆ Favorite";

      favoriteButton.addEventListener(
        "click",
        () => {
          recipeCollection.toggleFavorite(
            recipe.id
          );
          this.render();
        }
      );

      const deleteButton =
        document.createElement("button");

      deleteButton.textContent = "Delete";

      deleteButton.addEventListener(
        "click",
        () => {
          recipeCollection.removeRecipe(
            recipe.id
          );
          this.render();
        }
      );

      const details =
        document.createElement("div");

      details.style.display = "none";

      const ingredients =
        document.createElement("ul");

      recipe.ingredients.forEach(
        (ingredient) => {
          const li =
            document.createElement("li");

          li.textContent = ingredient;

          ingredients.appendChild(li);
        }
      );

      const instructions =
        document.createElement("p");

      instructions.textContent =
        recipe.instructions;

      details.append(
        ingredients,
        instructions
      );

      const toggleDetailsButton =
        document.createElement("button");

      toggleDetailsButton.textContent =
        "Show Details";

      toggleDetailsButton.addEventListener(
        "click",
        () => {
          if (
            details.style.display === "none"
          ) {
            details.style.display = "block";
            toggleDetailsButton.textContent =
              "Hide Details";
          } else {
            details.style.display = "none";
            toggleDetailsButton.textContent =
              "Show Details";
          }
        }
      );

      card.append(
        title,
        favoriteButton,
        deleteButton,
        toggleDetailsButton,
        details
      );

      this.container.appendChild(card);
    });
  }
}