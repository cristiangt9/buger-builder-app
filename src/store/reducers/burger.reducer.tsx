import { burger, ingredientType } from "../../Interfaces";
import DummyIngredients from "../../pages/DummyIngredientsData";
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../actions/burger.actions";

const initialState: burger = {
  ingredientsAdded: [] as ingredientType[],
  totalPrice: 0,
};

const reducerBurger = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ADD_INGREDIENT:
      const newIngredient = payload;
      const ingredientAdded = DummyIngredients.find(
        (ingredient) => ingredient.name === newIngredient
      );
      if (ingredientAdded) {
        return {
          ...state,
          ingredientsAdded: [...state.ingredientsAdded, newIngredient],
          totalPrice: state.totalPrice + ingredientAdded.price,
        };
      }
      return state;
    case REMOVE_INGREDIENT:
      const indexRemove = payload.index;
      const ingredientRemove = DummyIngredients.find(
        (ingredient) => ingredient.name === payload.type
      );
      if (ingredientRemove) {
        return {
          ...state,
          ingredientsAdded: state.ingredientsAdded.filter(
            (item, index) => index !== indexRemove
          ),
          totalPrice: state.totalPrice - ingredientRemove.price,
        };
      }
      return state;
    default:
      return state;
  }
};

export default reducerBurger;
