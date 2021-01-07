import React from "react";

import { useSelector, useDispatch } from "react-redux";

import StartPage from "./../StartPage/StartPage";
import MainPage from "./../MainPage/MainPage";
import { WarningPage } from "../WarningPage/WarningPage";

import "./App.scss";

const App = (props) => {
  const { isStartPageClicked } = useSelector(({ app }) => app);

  const widthOfTheScreen =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <div className="app-container">
      {widthOfTheScreen >= 1024 ? (
        <React.Fragment>
          {isStartPageClicked ? <MainPage /> : <StartPage />}
        </React.Fragment>
      ) : (
        <WarningPage />
      )}
    </div>
  );
};

export default App;
