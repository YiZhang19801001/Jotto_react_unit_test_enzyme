require("./bootstrap");

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import Main from "./components/Main";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.querySelector("#root")
);
