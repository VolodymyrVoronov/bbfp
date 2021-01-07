import React from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";

import {
  getFilteredQuotesAC,
  setActiveFilterButtonIndexAC,
  setAllQuotesAC,
} from "./../../redux/actions/actions";

import "./QuotesFilter.scss";

const QuotesFilter = React.memo((props) => {
  const dispatch = useDispatch();

  const { activeFilterButtonIndex } = useSelector(({ app }) => app);

  const onAllQuotesClickHandler = () => {
    dispatch(setActiveFilterButtonIndexAC(0));
    dispatch(setAllQuotesAC());
  };

  const onFilterButtonClickHandler = (index, character) => {
    dispatch(setActiveFilterButtonIndexAC(index));
    dispatch(getFilteredQuotesAC(character));
  };

  const { authorsOfQuotes } = props;

  return (
    <div className="quotes-filter-container">
      <button
        onClick={onAllQuotesClickHandler}
        className={`quotes-filter-container__filter-btn ${
          activeFilterButtonIndex === 0 ? `active-filter-btn` : null
        }`}
        type="button"
        disabled={activeFilterButtonIndex === 0}
      >
        All quotes
      </button>
      {authorsOfQuotes.map((author, index) => (
        <button
          onClick={() => onFilterButtonClickHandler(index + 1, author)}
          key={author + index}
          className={`quotes-filter-container__filter-btn ${
            activeFilterButtonIndex === index + 1 ? `active-filter-btn` : null
          }`}
          type="button"
          disabled={activeFilterButtonIndex === index + 1}
        >
          {author}
        </button>
      ))}
    </div>
  );
});

QuotesFilter.propTypes = {
  activeFilterButtonIndex: PropTypes.number.isRequired,
  authorsOfQuotes: PropTypes.array.isRequired,
};

QuotesFilter.defaultProps = {
  activeFilterButtonIndex: 0,
  authorsOfQuotes: [],
};

export default QuotesFilter;
