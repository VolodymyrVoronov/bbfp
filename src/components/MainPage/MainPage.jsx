import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { Switch, Route, Redirect } from "react-router-dom";

import HeaderNav from "./../HeaderNav/HeaderNav";
import InformationAboutPortal from "./../InformationAboutPortal/InformationAboutPortal";
import RandomCharacter from "./../RandomCharacter/RandomCharacter";
import AllCharacters from "./../AllCharacters/AllCharacters";
import FindACharacter from "./../FindACharacter/FindACharacter";
import Episodes from "./../Episodes/Episodes";
import Quotes from "./../Quotes/Quotes";
import Preloader from "../UI/Preloader/Preloader";

import "./MainPage.scss";

const MainPage = (props) => {
  const { isStartDataLoading } = useSelector(({ app }) => app);
  return (
    <div className="main-page-container">
      {isStartDataLoading ? (
        <div className="main-page-container__preloader-block">
          <Preloader />
        </div>
      ) : (
        <HeaderNav />
      )}

      <Switch>
        <Redirect
          exact
          from="/"
          to="/information-about-portal"
          component={InformationAboutPortal}
        />
        <Route
          exact
          path="/information-about-portal"
          component={InformationAboutPortal}
        />

        <Route exact path="/random-character" component={RandomCharacter} />
        <Route exact path="/all-characters" component={AllCharacters} />
        <Route exact path="/find-a-character" component={FindACharacter} />
        <Route exact path="/episodes" component={Episodes} />
        <Route exact path="/quotes" component={Quotes} />
      </Switch>
    </div>
  );
};

export default MainPage;
