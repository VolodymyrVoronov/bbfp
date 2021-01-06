import React from "react";

import { CSSTransition } from "react-transition-group";

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
              <span className="character__bold-text">Nickname</span> {nickname}
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
              <span className="search-result__bold-text">Status</span> {status}
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
  );
});

export default SearchResult;
