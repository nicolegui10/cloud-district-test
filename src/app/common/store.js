import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const reducer = combineReducers(reducers);

const configureStore = () => {
  const store = createStore(
    reducer, applyMiddleware(thunk)
  );

  return { store };
};

export default configureStore;
