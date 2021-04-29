import { combineReducers } from "redux";
import reducerBurger from "./burger.reducer";

const reducers = combineReducers({ burger: reducerBurger });

export default reducers;
