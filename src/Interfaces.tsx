export type ingredientType =
  | "bread-bottom"
  | "bread-top"
  | "Meat"
  | "Cheese"
  | "Salad"
  | "Bacon";

export interface ingredient {
  name: ingredientType;
  price: number;
  maxQuantity: number;
}

export interface propsIngredient {
  type: ingredientType;
  index: number;
}

export interface propsBurgerBuildControl {
  ingredients: ingredient[];
}

export interface propsIngredientControl {
  ingredient: ingredient;
}

export interface stateStore {
  burger: burger;
}

export interface burger {
  ingredientsAdded: ingredientType[];
  totalPrice: number;
}

export interface propsButton {
  onClick: () => void,
  type: string,
  children: any
}