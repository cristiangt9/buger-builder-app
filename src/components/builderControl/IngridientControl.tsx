import classes from "./IngridientControl.module.css";
import { propsIngredientControl } from "../../Interfaces";
import { add_ingredient } from "../../store/actions/burger.actions";
import { useDispatch } from "react-redux";

const IngridientControl = ({ ingredient }: propsIngredientControl) => {
  const dispatch = useDispatch();
  const addClickHandler = () => {
    dispatch(add_ingredient(ingredient.name));
  };
  return (
    <div className={classes.BuildControl}>
      <button className={classes.More} onClick={addClickHandler}>
        {ingredient.name}
      </button>
      <div className={classes.Label}>Price: $ {ingredient.price}</div>
    </div>
  );
};

export default IngridientControl;
