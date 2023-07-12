import dataGenrer from "../data/genre.json";
import {
  getListSixtyMovies,
  getListMoviesPlayingNow,
  getMovieById,
} from "./getFetchMovies";

export const listSession = () => {
  return getListSixtyMovies(dataGenrer);
};

export const moviesPlayingNow = () => {
  return getListMoviesPlayingNow();
};

export const movieById = (id) => {
  return getMovieById(id);
};
