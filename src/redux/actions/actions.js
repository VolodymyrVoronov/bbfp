import {
  SET_START_PAGE_CLICKED,
  GET_RANDOM_CHARACTER,
  SET_NAV_CLICKED,
  IS_RANDOM_CHARACTER_LOADING,
  GET_ALL_CHARACTERS,
  GET_SEARCHED_CHARACTER,
  IS_SEARCHING,
  GET_ALL_EPISODES,
  GET_RANDOM_QUOTE,
  IS_RANDOM_QUOTE_LOADING,
  GET_ALL_QUOTES,
  IS_START_DATA_LODING,
  SET_ACTIVE_FILTER_BUTTON_INDEX,
  GET_FILTERED_QUOTES,
  SET_ALL_QUOTES,
} from "./actionTypes";

export const setStartPageClickedAC = () => ({
  type: SET_START_PAGE_CLICKED,
});

export const setNavClickedAC = () => ({
  type: SET_NAV_CLICKED,
});

export const getRandomCharacterAC = (randomCharacter) => ({
  type: GET_RANDOM_CHARACTER,
  randomCharacter,
});

export const isRandomCharacterLoadingAC = (isRandomCharacterLoading) => ({
  type: IS_RANDOM_CHARACTER_LOADING,
  isRandomCharacterLoading,
});

export const getAllCharactersAC = (allCharacters) => ({
  type: GET_ALL_CHARACTERS,
  allCharacters,
});

export const getSearchedCharacterAC = (searchedCharacter) => ({
  type: GET_SEARCHED_CHARACTER,
  searchedCharacter,
});

export const isSearchingAC = (isSearching) => ({
  type: IS_SEARCHING,
  isSearching,
});

export const getAllEpisodesAC = (allEpisodes) => ({
  type: GET_ALL_EPISODES,
  allEpisodes,
});

export const getRandomQuoteAC = (randomQuote) => ({
  type: GET_RANDOM_QUOTE,
  randomQuote,
});

export const isRandomQuoteLoadingAC = (isRandomQuoteLoading) => ({
  type: IS_RANDOM_QUOTE_LOADING,
  isRandomQuoteLoading,
});

export const getAllQuotesAC = (quotes) => ({
  type: GET_ALL_QUOTES,
  quotes,
});

export const isStartDataLoadingAC = (isStartDataLoading) => ({
  type: IS_START_DATA_LODING,
  isStartDataLoading,
});

export const setActiveFilterButtonIndexAC = (activeFilterButtonIndex) => ({
  type: SET_ACTIVE_FILTER_BUTTON_INDEX,
  activeFilterButtonIndex,
});

export const getFilteredQuotesAC = (character) => ({
  type: GET_FILTERED_QUOTES,
  character,
});

export const setAllQuotesAC = () => ({
  type: SET_ALL_QUOTES,
});
