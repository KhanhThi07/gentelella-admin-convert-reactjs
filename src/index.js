import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//import redux
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/store";

import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
