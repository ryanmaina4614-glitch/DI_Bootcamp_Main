export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MealResponse {
  meals: Meal[];
}

export interface DataState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}