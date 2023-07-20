import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
//npm install redux-devtools-extension --save-dev
import { composeWithDevTools } from "redux-devtools-extension";
import calcReducer from "../reducers/calcReducer";

export const store = createStore(
  calcReducer,
  composeWithDevTools(applyMiddleware(logger))
);

store.subscribe(() => {
  console.log(`Store state : ${store.getState()}`);
});
