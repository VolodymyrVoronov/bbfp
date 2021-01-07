import React from "react";

import { useSelector, useDispatch } from "react-redux";

import Fade from "react-reveal/Fade";

import { getRandomCharacter } from "./../../redux/reducers/app";

import Preloader from "../UI/Preloader/Preloader";

import "./RandomCharacter.scss";

const RandomCharacter = React.memo((props) => {
  const dispatch = useDispatch();

  const { randomCharacter, isRandomCharacterLoading } = useSelector(
    ({ app }) => app
  );

  const onRandomCharacterButtonClickHandler = (params) => {
    dispatch(getRandomCharacter());
  };

  const {
    appearance,
    img,
    name,
    nickname,
    occupation,
    portrayed,
    status,
  } = randomCharacter;

  return (
    <div className="random-character-container character">
      {isRandomCharacterLoading ? <Preloader /> : null}
      {isRandomCharacterLoading ? null : (
        <React.Fragment>
          <Fade>
            <div className="character__content-left">
              <p className="character__name">
                <span className="character__bold-text">Name</span> {name}
              </p>
              <p className="character__nickname">
                <span className="character__bold-text">Nickname</span>{" "}
                {nickname}
              </p>
              <p className="character__occupation">
                <span className="character__bold-text">Occupation</span>{" "}
                {occupation !== null ? occupation.join(", ") : `No information`}
              </p>
              <p className="character__portrayed">
                <span className="character__bold-text">Portrayed</span>{" "}
                {portrayed}
              </p>
              <p className="character__status">
                <span className="character__bold-text">Status</span> {status}
              </p>
              <p className="character__appearance">
                <span className="character__bold-text">
                  Appearance in season
                </span>{" "}
                {appearance !== null ? appearance.join(", ") : `No information`}
              </p>
              <button
                onClick={onRandomCharacterButtonClickHandler}
                className="character__random-character-btn"
                type="button"
              >
                Get random character
              </button>
              <br />
            </div>
            <div className="character__content-right">
              <div
                className="character__photo"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              ></div>
            </div>
          </Fade>
        </React.Fragment>
      )}
    </div>
  );
});

export default RandomCharacter;
