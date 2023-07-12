import dataGenrer from "../data/genre.json";
import { getListSixtyMovies, getListMoviesPlayingNow } from "./getFetchMovies";


export const listSession = () => {
  return getListSixtyMovies(dataGenrer);
};

export const moviesPlayingNow = () => {
  return getListMoviesPlayingNow()
}