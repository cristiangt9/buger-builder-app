import { ingredientType } from "../../Interfaces";

export const ADD_INGREDIENT= "[BURGER] ADD INGREDIENT";
export const add_ingredient = (ingredient:ingredientType) => ({
    type: ADD_INGREDIENT,
    payload: ingredient
});
export const REMOVE_INGREDIENT= "[BURGER] REMOVE INGREDIENT";
export const remove_ingredient = ({index , type}:any) => ({
    type: REMOVE_INGREDIENT,
    payload: {index, type}
});
