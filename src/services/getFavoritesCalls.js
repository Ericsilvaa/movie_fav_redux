import {
  addMovieFavorite,
  getMovieLocalStorage,
  removeFavorite,
} from "./getFavorites";

export const hasMovieLocalStorage = () => {
  return getMovieLocalStorage();
};

export const addMovieList = (list, movie) => {
  return addMovieFavorite(list, movie);
};

export const removeFavorites = (list, id) => {
  return removeFavorite(list, id);
};
