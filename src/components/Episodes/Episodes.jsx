import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import Preloader from "../UI/Preloader/Preloader";

import "./Episodes.scss";

const Episodes = (props) => {
  const { allEpisodes } = useSelector(({ app }) => app);

  const [maxRange, setMaxRange] = React.useState(9);
  const [isLoading, setIsLoading] = React.useState(false);

  const onLoadMoreBtnClickHandler = React.useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setMaxRange((prevRange) => prevRange + 6);
      setIsLoading(false);
    }, 1000);
  }, []);

  const episodesComponent = allEpisodes
    .slice(0, maxRange)
    .map((episodeItem) => {
      const {
        title,
        air_date,
        episode,
        season,
        characters,
        episode_id,
      } = episodeItem;

      return (
        <section key={episode_id} className="episode__item">
          <p className="episode__episode-num">
            <span className="episode__bold-text">Episode</span> {episode}
          </p>
          <p className="episode__season">
            <span className="episode__bold-text">Season</span> {season}
          </p>
          <p className="episode__title">
            <span className="episode__bold-text">Title</span> {title}
          </p>
          <p className="episode__air-date">
            <span className="episode__bold-text">Air date</span> {air_date}
          </p>
          <p className="episode__characters">
            <span className="episode__bold-text">Characters</span>{" "}
            {characters !== null ? characters.join(", ") : `No information`}
          </p>
        </section>
      );
    });

  return (
    <React.Fragment>
      <div className="episode-container episode">{episodesComponent}</div>
      <div className="episode-container__btn-block">
        {allEpisodes.length >= maxRange ? (
          <React.Fragment>
            {isLoading ? (
              <div className="episode-container__preloader">
                <Preloader />
              </div>
            ) : (
              <button
                onClick={onLoadMoreBtnClickHandler}
                className="episode-container__load-more-btn"
                type="button"
              >
                Load more episodes
              </button>
            )}
          </React.Fragment>
        ) : (
          <br />
        )}
      </div>
    </React.Fragment>
  );
};

Episodes.propTypes = {
  allEpisodes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      air_date: PropTypes.string.isRequired,
      episode: PropTypes.string.isRequired,
      season: PropTypes.string.isRequired,
      characters: PropTypes.array.isRequired,
      episode_id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

Episodes.defaultProps = {
  allEpisodes: [
    {
      title: ``,
      air_date: ``,
      episode: ``,
      season: ``,
      characters: [],
      episode_id: 0,
    },
  ],
};

export default Episodes;
