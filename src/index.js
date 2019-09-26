import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./styles/index.css";
import allReducers from "./reducers/index";
import ChatHome from "./ChatHome";
import MainMenu from "./MainMenu";

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <HashRouter>
      <MainMenu />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
