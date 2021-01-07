import React from "react";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import { getRandomQuote } from "./../../redux/reducers/app";

import QuotesFilter from "./../QuotesFilter/QuotesFilter";

import Preloader from "../UI/Preloader/Preloader";

import "./Quotes.scss";

const Quotes = (props) => {
  const dispatch = useDispatch();

  const {
    randomQuote,
    isRandomQuoteLoading,
    quotes,
    filteredQuotes,
  } = useSelector(({ app }) => app);

  const onGetRandomQuoteClickHandler = () => {
    dispatch(getRandomQuote());
  };

  const { quote, author } = randomQuote[0];

  const authorsOfQuotes = [
    ...new Set(quotes.map((quoteItem) => quoteItem.author)),
  ];

  const getQuotes = (quotes, filteredQuotes) => {
    if (filteredQuotes.length === 0) {
      return quotes;
    } else {
      return filteredQuotes;
    }
  };

  return (
    <div className="quotes-container quotes">
      <section className="quotes__left random-quote">
        <p className="random-quote__title">
          <span className="random-quote__title-one">Ra</span>ndom quote.
        </p>
        {isRandomQuoteLoading ? (
          <Preloader />
        ) : (
          <Zoom>
            <figure className="random-quote__body">
              <blockquote lang="en" className="random-quote__text">
                <q>{quote}</q>
              </blockquote>
              <figcaption className="random-quote__author">
                &mdash; {author}
              </figcaption>
            </figure>
          </Zoom>
        )}

        <button
          onClick={onGetRandomQuoteClickHandler}
          className="random-quote__get-quote-btn"
          type="button"
        >
          Get random quote
        </button>
      </section>
      <section className="quotes__right quote-item">
        <QuotesFilter authorsOfQuotes={authorsOfQuotes} />

        <div className="quote-item__quote-block quote-block">
          {getQuotes(quotes, filteredQuotes).map((quoteItem) => {
            const { quote_id, quote, author } = quoteItem;
            return (
              <Fade key={quote_id} cascade>
                <div className="quote-block__body">
                  <blockquote lang="en" className="quote-block__text">
                    <q>{quote}</q>
                  </blockquote>
                  <figcaption className="quote-block__author">
                    &mdash; {author}
                  </figcaption>
                </div>
              </Fade>
            );
          })}
        </div>
      </section>
    </div>
  );
};

Quotes.propTypes = {
  randomQuote: PropTypes.arrayOf(
    PropTypes.shape({
      quote_id: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  isRandomQuoteLoading: PropTypes.bool.isRequired,

  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote_id: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  filteredQuotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote_id: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

Quotes.defaultProps = {
  randomQuote: [
    {
      quote_id: 0,
      quote: ``,
      author: ``,
    },
  ],

  isRandomQuoteLoading: false,

  quotes: [
    {
      quote_id: 0,
      quote: ``,
      author: ``,
    },
  ],

  filteredQuotes: [
    {
      quote_id: 0,
      quote: ``,
      author: ``,
    },
  ],
};

export default Quotes;
