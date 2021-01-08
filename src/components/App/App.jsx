import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import StartPage from "./../StartPage/StartPage";
import MainPage from "./../MainPage/MainPage";
import { WarningPage } from "../WarningPage/WarningPage";
import ErrorPage from "../UI/ErrorPage/ErrorPage";

import "./App.scss";

const App = (props) => {
  const { isStartPageClicked, isErrorOccured } = useSelector(({ app }) => app);

  const widthOfTheScreen =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <div className="app-container">
      {isErrorOccured ? (
        <ErrorPage />
      ) : (
        <>
          {widthOfTheScreen >= 1024 ? (
            <React.Fragment>
              {isStartPageClicked ? <MainPage /> : <StartPage />}
            </React.Fragment>
          ) : (
            <WarningPage />
          )}
        </>
      )}
    </div>
  );
};

App.propTypes = {
  isStartPageClicked: PropTypes.bool.isRequired,
};

App.defaultProps = {
  isStartPageClicked: false,
};

export default App;
