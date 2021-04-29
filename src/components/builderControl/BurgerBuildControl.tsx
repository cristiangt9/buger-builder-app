import classes from "./BurgerBuildControl.module.css";
import { ingredient, stateStore } from "../../Interfaces";
import IngridientControl from "./IngridientControl";
import DummyIngredients from "../../pages/DummyIngredientsData";
import { useSelector } from "react-redux";
import OrderSummary from "../order/OrderSummary";
import { useState } from "react";

const BurgerBuildControl = () => {
  const buger = useSelector((state: stateStore) => state.burger);
  const [showOrderBurguer, setShowOrderBurguer] = useState(false);

  const toggleOrderNowHandler = () => {
    setShowOrderBurguer((prevState) => !prevState);
  }

  return (
    <div className={classes.BuildControls}>
      <OrderSummary show={showOrderBurguer}/>
      <h2>Price: ${buger.totalPrice}</h2>
      {DummyIngredients.map((ingredient: ingredient, index) => (
        <IngridientControl key={index} ingredient={ingredient} />
      ))}
      {buger.totalPrice > 0 && (
        <div>
          <button className={classes.OrderButton} onClick={toggleOrderNowHandler}>Order Now</button>
        </div>
      )}
    </div>
  );
};

export default BurgerBuildControl;
