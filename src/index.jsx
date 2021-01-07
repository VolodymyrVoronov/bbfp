import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { HashRouter } from "react-router-dom";

import store from "./redux/store";

import reportWebVitals from "./reportWebVitals";

import App from "./components/App/App";

import "./index.scss";

ReactDOM.render(
  <HashRouter>
    <React.Fragment>
      <Provider store={store}>
        <App />
      </Provider>
    </React.Fragment>
  </HashRouter>,
  document.getElementById("root")
);

reportWebVitals();
