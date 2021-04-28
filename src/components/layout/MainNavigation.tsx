import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={classes.main}>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Builder</NavLink>
          </li>
          <li>
            <NavLink to='/checkout'>Checkout</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
