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
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);

reportWebVitals();
