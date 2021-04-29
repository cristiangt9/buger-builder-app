import BurgerBuildControl from "../components/builderControl/BurgerBuildControl";
import Burger from "../components/burger/Burger";
import classes from "./Builder.module.css";

const Builder = () => {
  
  return (
    <div className={classes.main}>
      Burger Builder Page
      <Burger />
      <BurgerBuildControl/>
    </div>
  );
};

export default Builder;
