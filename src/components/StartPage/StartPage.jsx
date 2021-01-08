import React from "react";

import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { setStartPageClickedAC } from "./../../redux/actions/actions";
import { getStartData } from "./../../redux/reducers/app";

import { KEY_CODE } from "./../../const";

import { getRandomBackgroundImage } from "../../utils/getRandomBackgroundImage";

import "./StartPage.scss";

const StartPage = (props) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const onKeyDown = (e) => {
    if (e.keyCode === KEY_CODE.ENTER || e.keyCode === KEY_CODE.SPACE) {
      dispatch(setStartPageClickedAC());
      dispatch(getStartData());

      history.push("/information-about-portal");
    }
  };

  const cbRef = React.useRef(onKeyDown);

  React.useEffect(() => {
    cbRef.current = onKeyDown;
  });

  React.useEffect(() => {
    const cb = (e) => cbRef.current(e);
    window.addEventListener("keydown", cb);
    return () => {
      window.removeEventListener("keydown", cb);
    };
  }, []);

  const onEnterButtonClickHandler = (params) => {
    dispatch(setStartPageClickedAC());
    dispatch(getStartData());

    history.push("/information-about-portal");
  };

  const backGroundImage = getRandomBackgroundImage();

  return (
    <div
      className="start-page-container"
      style={{
        backgroundImage: `url(${backGroundImage})`,
      }}
    >
      <div className="start-page-container__enter-block">
        <h1 className="start-page-container__title title">
          <span className="title__highlighted-one">Br</span>eaking&nbsp;
          <span className="title__highlighted-two">Ba</span>d
        </h1>
        <button
          onClick={onEnterButtonClickHandler}
          className="start-page-container__button"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default StartPage;
