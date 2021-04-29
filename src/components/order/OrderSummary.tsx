import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { stateStore } from "../../Interfaces";
import DummyIngredients from "../../pages/DummyIngredientsData";
import Modal from "../ui/Modal";
import classes from "./OrderSummary.module.css";

const OrderSummary = (props: any) => {
  const history = useHistory();
  const burger = useSelector((state: stateStore) => state.burger);
  const ingredientsAddedObject = burger.ingredientsAdded.reduce(function (
    prev: any,
    cur: any
  ) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  },
  {});
  console.log(ingredientsAddedObject);
  const ingredientsSummary = Object.keys(ingredientsAddedObject).map(
    (item: any) => {
      const ingredient = DummyIngredients.find(
        (ingredient) => ingredient.name === item
      );

      return (
        <li key={item}>
          <span className={classes.Ingredient}>{item}:</span> {ingredientsAddedObject[item]} 
          price each: ${ingredient?.price ?? 0} 
          subtotal: $ {(ingredient?.price ?? 0) * ingredientsAddedObject[item]}
        </li>
      );
    }
  );

  const goCheckoutButtonHandler = () => {
      history.push('/checkout');
  }

  return (
    <Modal show={props.show}>
      <h3>Your Order</h3>
      <p>A delicuios burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Burger total price: ${burger.totalPrice}</p>
      <button>Add and build other</button>
      <button onClick={goCheckoutButtonHandler}>Go to checkout</button>
    </Modal>
  );
};

export default OrderSummary;
