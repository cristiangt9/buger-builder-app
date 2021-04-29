import classes from "./Button.module.css";
import { propsButton } from "../../Interfaces";

const Button = (props: propsButton) => {
  return (
    <button className={`${classes.Button} ${classes[props.type]}`}>
      {props.children}
    </button>
  );
};

export default Button;
