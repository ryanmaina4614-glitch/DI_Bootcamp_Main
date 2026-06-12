export default class RecipeItem {
  constructor(
    public id: string,
    public title: string,
    public ingredients: string[],
    public instructions: string,
    public isFavorite: boolean = false
  ) {}
}