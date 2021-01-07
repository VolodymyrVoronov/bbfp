import { appAPI } from "./../../api/api";

import {
  getRandomCharacterAC,
  isRandomCharacterLoadingAC,
  getAllCharactersAC,
  getSearchedCharacterAC,
  isSearchingAC,
  getAllEpisodesAC,
  getRandomQuoteAC,
  isRandomQuoteLoadingAC,
  getAllQuotesAC,
  isStartDataLoadingAC,
} from "../actions/actions";

import {
  SET_START_PAGE_CLICKED,
  GET_RANDOM_CHARACTER,
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
} from "../actions/actionTypes";

const initialState = {
  isStartPageClicked: false,
  randomCharacter: [],
  isRandomCharacterLoading: false,
  allCharacters: [],
  searchedCharacter: null,
  isSearching: false,
  allEpisodes: [],
  randomQuote: [],
  isRandomQuoteLoading: false,
  quotes: [],
  isStartDataLoading: false,
  activeFilterButtonIndex: 0,
  filteredQuotes: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_START_PAGE_CLICKED:
      return {
        ...state,
        isStartPageClicked: true,
      };

    case GET_RANDOM_CHARACTER:
      return {
        ...state,
        randomCharacter: action.randomCharacter,
      };

    case IS_RANDOM_CHARACTER_LOADING:
      return {
        ...state,
        isRandomCharacterLoading: action.isRandomCharacterLoading,
      };

    case GET_ALL_CHARACTERS:
      return {
        ...state,
        allCharacters: action.allCharacters,
      };

    case GET_SEARCHED_CHARACTER:
      return {
        ...state,
        searchedCharacter: action.searchedCharacter,
      };

    case IS_SEARCHING:
      return {
        ...state,
        isSearching: action.isSearching,
      };

    case GET_ALL_EPISODES:
      return {
        ...state,
        allEpisodes: action.allEpisodes.filter(
          (episode) => episode.series === `Breaking Bad`
        ),
      };

    case GET_RANDOM_QUOTE:
      return {
        ...state,
        randomQuote: action.randomQuote,
      };

    case IS_RANDOM_QUOTE_LOADING:
      return {
        ...state,
        isRandomQuoteLoading: action.isRandomQuoteLoading,
      };

    case GET_ALL_QUOTES:
      return {
        ...state,
        quotes: action.quotes.filter(
          (quote) => quote.series === `Breaking Bad`
        ),
      };

    case IS_START_DATA_LODING:
      return {
        ...state,
        isStartDataLoading: action.isStartDataLoading,
      };

    case SET_ACTIVE_FILTER_BUTTON_INDEX:
      return {
        ...state,
        activeFilterButtonIndex: action.activeFilterButtonIndex,
      };

    case GET_FILTERED_QUOTES:
      return {
        ...state,
        filteredQuotes: state.quotes.filter(
          (quote) => quote.author === action.character
        ),
      };

    case SET_ALL_QUOTES:
      return {
        ...state,
        filteredQuotes: [...state.quotes],
      };

    default:
      return state;
  }
};

// Thunks
export const getRandomCharacter = () => async (dispatch) => {
  try {
    dispatch(isRandomCharacterLoadingAC(true));
    const response = await appAPI.getRandomCharacter();
    if (response.status === 200) {
      dispatch(getRandomCharacterAC(response.data[0]));
      dispatch(isRandomCharacterLoadingAC(false));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSearchedCharacter = (searchedCharacter) => async (dispatch) => {
  try {
    dispatch(isSearchingAC(true));
    const response = await appAPI.getSearchedCharacter(searchedCharacter);
    if (response.status === 200) {
      dispatch(getSearchedCharacterAC(response.data));
      dispatch(isSearchingAC(false));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRandomQuote = () => async (dispatch) => {
  try {
    dispatch(isRandomQuoteLoadingAC(true));
    const response = await appAPI.getRandomQuote();
    if (response.status === 200) {
      dispatch(getRandomQuoteAC(response.data));
      dispatch(isRandomQuoteLoadingAC(false));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getStartData = () => async (dispatch) => {
  try {
    dispatch(isStartDataLoadingAC(true));

    const responseRandomCharacter = await appAPI.getRandomCharacter();
    if (responseRandomCharacter.status === 200) {
      dispatch(getRandomCharacterAC(responseRandomCharacter.data[0]));
    }
    const responseAllCharaters = await appAPI.getAllCharaters();

    if (responseAllCharaters.status === 200) {
      dispatch(getAllCharactersAC(responseAllCharaters.data));
    }

    const responseAllEpisodes = await appAPI.getAllEpisodes();
    if (responseAllEpisodes.status === 200) {
      dispatch(getAllEpisodesAC(responseAllEpisodes.data));
    }

    const responseRandomQuote = await appAPI.getRandomQuote();
    if (responseRandomQuote.status === 200) {
      dispatch(getRandomQuoteAC(responseRandomQuote.data));
    }

    const responseAllQuotes = await appAPI.getAllQuotes();
    if (responseAllQuotes.status === 200) {
      dispatch(getAllQuotesAC(responseAllQuotes.data));
    }

    dispatch(isStartDataLoadingAC(false));
  } catch (error) {
    console.log(error);
  }
};

export default appReducer;
