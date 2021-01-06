import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { getSearchedCharacter } from "./../../redux/reducers/app";

import SearchResult from "./../SearchResult/SearchResult";
import Preloader from "../UI/Preloader/Preloader";
import NothingFound from "../UI/NothingFound/NothingFound";

import "./FindACharacter.scss";

const FindACharacter = (props) => {
  const dispatch = useDispatch();

  const { searchedCharacter, isSearching } = useSelector(({ app }) => app);
  const [searchedCharacterItem, setSearchedCharacter] = React.useState(``);
  const [disabled, setDisabled] = React.useState(true);

  const onInputFiledChangeHandler = (e) => {
    setSearchedCharacter(e.target.value.trim());

    if (e.target.value.trim().length === 0) {
      setDisabled(true);
    }

    if (e.target.value.trim().length !== 0) {
      setDisabled(false);
    }
  };

  const onSearchButtonClickHander = () => {
    dispatch(getSearchedCharacter(searchedCharacterItem));
    setSearchedCharacter(``);
    setDisabled(true);
  };

  return (
    <div className="find-a-character-container">
      <section className="find-a-character-container__input-field input-field">
        <input
          onChange={(e) => onInputFiledChangeHandler(e)}
          value={searchedCharacterItem}
          type="text"
          className="input-field__input"
          placeholder="Walter..."
        />
        <button
          onClick={onSearchButtonClickHander}
          type="button"
          className="input-field__search-btn"
          disabled={disabled}
        >
          Search
        </button>
      </section>

      {isSearching ? (
        <div className="find-a-character-container__preloader">
          <Preloader />
        </div>
      ) : null}

      {searchedCharacter !== null ? (
        <>
          {searchedCharacter.length === 0 && !isSearching ? (
            <NothingFound />
          ) : null}
        </>
      ) : null}

      {searchedCharacter !== null ? (
        <>
          {searchedCharacter.length !== 0 && !isSearching ? (
            <section className="find-a-character-container__result result">
              {searchedCharacter.map((character) => (
                <SearchResult key={character.char_id} character={character} />
              ))}
            </section>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default FindACharacter;
