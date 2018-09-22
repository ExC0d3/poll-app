import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";

import root from "./Reducers/root";

// create a middle ware for using redux dev tools
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store by passing the reducers
let store = createStore(root, compose(reduxDevTools));

// render the root component and pass the store as prop
// so the all the children have access to it
ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
