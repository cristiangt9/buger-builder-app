import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers =
	process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
		: compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers,enhancer);

export default store;