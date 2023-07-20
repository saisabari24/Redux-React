// import { applyMiddleware, combineReducers } from "redux";
// import { legacy_createStore as createStore } from "redux";
// import logger from "redux-logger";
// //npm install redux-devtools-extension --save-dev
// import { composeWithDevTools } from "redux-devtools-extension";
// //npm i axios
// import axios from "axios";
// import thunk from "redux-thunk";

// const initialState = {
//   fetching: false,
//   fetched: false,
//   users: [],
//   error: null,
// };
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_USERS_STARTED": {
//       return { ...state, fetching: true };
//     }
//     case "FETCHED_USERS": {
//       return {
//         ...state,
//         fetching: false,
//         fetched: true,
//         users: action.payload,
//       };
//     }
//     case "FETCH_USERS_ERROR": {
//       return { ...state, fetching: false, error: action.payload };
//     }
//   }
// };

// const middleware = applyMiddleware(thunk, logger);
// const store = createStore(reducer, composeWithDevTools(middleware));

// store.subscribe(() => {
//   console.log(` Store state: ${store.getState()}`);
// });

// store.dispatch((dispatch) => {
//   //rules/roles/modify payload or action
//   dispatch({ type: "FETCH_USERS_STARTED" });
//   axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       dispatch({ type: "FETCHED_USERS", payload: response.data });
//     })
//     .catch((error) => {
//       dispatch({ type: "FETCH_USERS_ERROR", payload: error });
//     });
// });
//----------------------------------------------------
// import { applyMiddleware, combineReducers } from "redux";
// import { legacy_createStore as createStore } from "redux";
// import logger from "redux-logger";
// //npm install redux-devtools-extension --save-dev
// import { composeWithDevTools } from "redux-devtools-extension";

// const userReducer = (state = {}, action) => {
//   switch (action.type) {
//     case "CHANGE_NAME": {
//       return (state = { ...state, name: action.payload });
//     }
//     case "CHANGE_SALARY": {
//       return (state = { ...state, salary: action.payload });
//     }
//     default: {
//       return state;
//     }
//   }
// };
// const tweetsReducer = (state = [], action) => {
//   return state;
// };
// const allReducers = combineReducers({
//   user: userReducer,
//   tweets: tweetsReducer,
// });
// //store= { user: {name:'Murthy',salary:5000},tweets:[]    }

// const middleware = applyMiddleware(logger);
// const store = createStore(allReducers, composeWithDevTools(middleware));

// store.subscribe(() => {
//   console.log(` Store state: ${store.getState()}`);
// });

// store.dispatch({ type: "CHANGE_NAME", payload: "Sai" });
// store.dispatch({ type: "CHANGE_SALARY", payload: 5000 });
// store.dispatch({ type: "CHANGE_NAME", payload: "Sabari" });
// store.dispatch({ type: "CHANGE_CITY", payload: "Chennai" });
//------------------------------------------------------
// // const reducer = (state, action) => {
//   if (action.type === "INC") {
//     let oldState = { ...state };
//     return state + action.payload;
//   }
//   if (action.type === "DEC") {
//     let oldState = { ...state };
//     return state - action.payload;
//   }
//   return state;
// };

// const middleware = applyMiddleware(logger);

// const store = createStore(reducer, 1, middleware);

// store.subscribe(() => {
//   console.log(`Store state : ${store.getState()}`);
// });

// store.dispatch({ type: "INC", payload: 5 });
// store.dispatch({ type: "DEC", payload: 4 });
// store.dispatch({ type: "DEC", payload: 1 });
// store.dispatch({ type: "MULTIPLY", payload: 4 });

//--------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./project/store/config.dev";
import ProjectApp from "./project/ProjectApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProjectApp />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
