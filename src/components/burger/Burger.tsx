import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { ingredientType, stateStore } from "../../Interfaces";
import classes from "./Burger.module.css";
import Ingredient from "./Ingredient";
const Burger = () => {
  let content: ReactElement;
  const ingredients = useSelector((state: stateStore) => state.burger.ingredientsAdded);
  if (ingredients.length === 0) {
    content = <p>Please start adding ingredients!</p>;
  } else {
    content = (
      <>
        {ingredients.map((ingridient: ingredientType, index: any) => (
          <Ingredient key={index} type={ingridient} index={index}/>
        ))}
      </>
    );
  }

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" index={-1}/>
      {content}
      <Ingredient type="bread-bottom" index={-1}/>
    </div>
  );
};

export default Burger;
