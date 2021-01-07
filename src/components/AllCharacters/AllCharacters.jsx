import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import Preloader from "../UI/Preloader/Preloader";

import "./AllCharacters.scss";

const AllCharacters = (props) => {
  const { allCharacters } = useSelector(({ app }) => app);

  const [maxRange, setMaxRange] = React.useState(6);
  const [isLoading, setIsLoading] = React.useState(false);

  const onLoadMoreBtnClickHandler = React.useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setMaxRange((prevRange) => prevRange + 6);
      setIsLoading(false);
    }, 1000);
  }, []);

  const characterComponent = allCharacters
    .slice(0, maxRange)
    .map((character) => {
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
      } = character;

      return (
        <div key={char_id} className="characters-item">
          <div
            className="characters-item__photo"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
          <p className="characters-item__name">
            <span className="characters-item__bold-text">Name</span> {name}
          </p>
          <p className="characters-item__birthday">
            <span className="characters-item__bold-text">Birthday</span>{" "}
            {birthday}
          </p>
          <p className="characters-item__nickname">
            <span className="character__bold-text">Nickname</span> {nickname}
          </p>
          <p className="characters-item__occupation">
            <span className="characters-item__bold-text">Occupation</span>{" "}
            {occupation !== null ? occupation.join(", ") : `No information`}
          </p>
          <p className="characters-item__portrayed">
            <span className="characters-item__bold-text">Portrayed</span>{" "}
            {portrayed}
          </p>
          <p className="characters-item__status">
            <span className="characters-item__bold-text">Status</span> {status}
          </p>
          <p className="characters-item__appearance">
            <span className="characters-item__bold-text">
              Appearance in season
            </span>{" "}
            {appearance !== null ? appearance.join(", ") : `No information`}
          </p>
        </div>
      );
    });

  return (
    <React.Fragment>
      <section className="charcters-items">{characterComponent}</section>
      <section className="charcters-items__btn-block">
        {allCharacters.length >= maxRange ? (
          <React.Fragment>
            {isLoading ? (
              <div className="charcters-items__preloader">
                <Preloader />
              </div>
            ) : (
              <button
                onClick={onLoadMoreBtnClickHandler}
                className="charcters-items__load-more-btn"
                type="button"
              >
                Load more characters
              </button>
            )}
          </React.Fragment>
        ) : (
          <br />
        )}
      </section>
    </React.Fragment>
  );
};

AllCharacters.propTypes = {
  allCharacters: PropTypes.arrayOf(
    PropTypes.shape({
      appearance: PropTypes.array.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      birthday: PropTypes.number.isRequired,
      nickname: PropTypes.string.isRequired,
      occupation: PropTypes.array.isRequired,
      portrayed: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      char_id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

AllCharacters.defaultProps = {
  allCharacters: [
    {
      appearance: [],
      img: ``,
      name: ``,
      birthday: 0,
      nickname: ``,
      occupation: [],
      portrayed: ``,
      status: ``,
      char_id: 0,
    },
  ],
};

export default AllCharacters;
