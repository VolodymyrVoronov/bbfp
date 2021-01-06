import * as axios from "axios";

import { bbAPI } from "./../const";

const instanceAPI = axios.create({
  baseURL: bbAPI,
});

export const appAPI = {
  getRandomCharacter() {
    return instanceAPI.get(`character/random`);
  },

  getAllCharaters() {
    return instanceAPI.get(`characters`);
  },

  getSearchedCharacter(searchedCharacter) {
    return instanceAPI.get(`characters?name=${searchedCharacter}`);
  },

  getAllEpisodes() {
    return instanceAPI.get(`episodes`);
  },

  getRandomQuote() {
    return instanceAPI.get(`quote/random`);
  },

  getAllQuotes() {
    return instanceAPI.get(`quotes`);
  },
};
