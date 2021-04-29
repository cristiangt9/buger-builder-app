import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { propsIngredient } from "../../Interfaces";
import { remove_ingredient } from "../../store/actions/burger.actions";
import classes from "./Ingredient.module.css";

const Ingredient = ({type, index}: propsIngredient) => {
  let ingredient: ReactElement;
  const dispatch = useDispatch();

  const removeClickHandler = () => {
    dispatch(remove_ingredient({index, type}));
  }

  switch (type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "Meat":
    case "Cheese":
    case "Salad":
    case "Bacon":
      ingredient = (
        <div className={`${classes[type]} ${classes.Tooltip}`}>
          <button className={classes.Button} onClick={removeClickHandler}>&#10007;</button>
          <span className={classes.Tooltiptext}>{type}</span>
        </div>
      );
      break;
    default:
      ingredient = <></>;
      break;
  }

  return ingredient;
};

export default Ingredient;
