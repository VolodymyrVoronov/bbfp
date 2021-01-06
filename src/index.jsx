import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import store from "./redux/store";

import reportWebVitals from "./reportWebVitals";

import App from "./components/App/App";

import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
