import classes from "./BurgerBuildControl.module.css";
import { ingredient, stateStore } from "../../Interfaces";
import IngridientControl from "./IngridientControl";
import DummyIngredients from "../../pages/DummyIngredientsData";
import { useSelector } from "react-redux";

const BurgerBuildControl = () => {
  const buger = useSelector((state: stateStore) => state.burger);
  return (
    <div className={classes.BuildControls}>
      BurgerBuildControl
      <h1>Price: ${buger.totalPrice}</h1>
      {DummyIngredients.map((ingredient: ingredient, index) => (
        <IngridientControl key={index} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default BurgerBuildControl;
