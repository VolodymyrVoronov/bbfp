import React from "react";
import PropTypes from "prop-types";

import { CSSTransition } from "react-transition-group";

import Fade from "react-reveal/Fade";

import "./SearchResult.scss";

const SearchResult = React.memo((props) => {
  const [showMoreInfo, setShowMoreInfo] = React.useState(false);
  const nodeRef = React.useRef(null);

  const onShowMoreBtnClickHandler = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  const {
    appearance,
    img,
    name,
    birthday,
    nickname,
    occupation,
    portrayed,
    status,
    char_id,
  } = props.character;

  const classesTransition = {
    enter: "enter",
    enterActive: "enter-active",
    exit: "exit",
    exitActive: "exit-active",
    exitDone: "exit-done",
  };

  return (
    <Fade cascade>
      <div className="search-result-container search-result">
        <div key={char_id} className="search-result__item">
          <div
            className="search-result__photo"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
          <p className="search-result__name">
            <span className="search-result__bold-text">Name</span> {name}
          </p>

          <button
            onClick={onShowMoreBtnClickHandler}
            className="search-result__more-info-btn"
          >
            {showMoreInfo ? `Hide` : `Show more`}
          </button>
          <CSSTransition
            nodeRef={nodeRef}
            in={showMoreInfo}
            timeout={500}
            classNames={classesTransition}
            unmountOnExit
            mountOnEnter
          >
            <div ref={nodeRef} className="search-result__container-more">
              <p className="search-result__birthday">
                <span className="search-result__bold-text">Birthday</span>{" "}
                {birthday}
              </p>
              <p className="search-result__nickname">
                <span className="character__bold-text">Nickname</span>{" "}
                {nickname}
              </p>
              <p className="search-result__occupation">
                <span className="search-result__bold-text">Occupation</span>{" "}
                {occupation !== null ? occupation.join(", ") : `No information`}
              </p>
              <p className="search-result__portrayed">
                <span className="search-result__bold-text">Portrayed</span>{" "}
                {portrayed}
              </p>
              <p className="search-result__status">
                <span className="search-result__bold-text">Status</span>{" "}
                {status}
              </p>
              <p className="search-result__appearance">
                <span className="search-result__bold-text">
                  Appearance in season
                </span>{" "}
                {appearance !== null ? appearance.join(", ") : `No information`}
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </Fade>
  );
});

SearchResult.propTypes = {
  appearance: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birthday: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired,
  occupation: PropTypes.array.isRequired,
  portrayed: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  char_id: PropTypes.number.isRequired,
};

SearchResult.defaultProps = {
  appearance: [],
  img: ``,
  name: ``,
  birthday: 0,
  nickname: ``,
  occupation: [],
  portrayed: ``,
  status: ``,
  char_id: 0,
};

export default SearchResult;
