import RecipeItem from "./RecipeItem";

export default class RecipeCollection {
  private static instance: RecipeCollection;
  private recipes: RecipeItem[] = [];

  private constructor() {
    this.load();
  }

  public static getInstance(): RecipeCollection {
    if (!RecipeCollection.instance) {
      RecipeCollection.instance = new RecipeCollection();
    }

    return RecipeCollection.instance;
  }

  public getRecipes(): RecipeItem[] {
    return this.recipes;
  }

  public addRecipe(recipe: RecipeItem): void {
    this.recipes.push(recipe);
    this.save();
  }

  public removeRecipe(id: string): void {
    this.recipes = this.recipes.filter(
      (recipe) => recipe.id !== id
    );

    this.save();
  }

  public toggleFavorite(id: string): void {
    const recipe = this.recipes.find(
      (recipe) => recipe.id === id
    );

    if (recipe) {
      recipe.isFavorite = !recipe.isFavorite;
      this.save();
    }
  }

  public clearRecipes(): void {
    this.recipes = [];
    this.save();
  }

  private save(): void {
    localStorage.setItem(
      "recipes",
      JSON.stringify(this.recipes)
    );
  }

  private load(): void {
    const storedData = localStorage.getItem("recipes");

    if (storedData) {
      const parsedRecipes = JSON.parse(storedData);

      this.recipes = parsedRecipes.map(
        (recipe: RecipeItem) =>
          new RecipeItem(
            recipe.id,
            recipe.title,
            recipe.ingredients,
            recipe.instructions,
            recipe.isFavorite
          )
      );
    }
  }
}