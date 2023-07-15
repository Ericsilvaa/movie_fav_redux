import { take, call, all, select, takeLatest, put } from "redux-saga/effects";
import {
  movies,
  onGetMoviesByGenreFail,
  onGetMoviesByGenreSuccess,
} from "./slice";

function* onGetMoviesByGenre({ payload }) {
  try {
    console.log(payload);
    const [moviesByGenre] = yield select((state) =>
      state.listMoviesSession.moviesSession
        .filter((movie) => movie.name === payload)
        .map((moviesList) => moviesList.movies)
    );
    console.log(moviesByGenre);

    yield put(onGetMoviesByGenreSuccess(moviesByGenre));
  } catch (error) {
    yield put(onGetMoviesByGenreFail(error));
  }
}

export default all([
  takeLatest("genreByMovies/onGetMoviesByGenre", onGetMoviesByGenre),
]);
