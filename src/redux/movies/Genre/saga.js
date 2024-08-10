import { all, put, select, takeLatest } from 'redux-saga/effects'
import { onGetMoviesByGenreFail, onGetMoviesByGenreSuccess } from './slice'

function* onGetMoviesByGenre({ payload }) {
  try {
    const [moviesByGenre] = yield select((state) =>
      state.listMoviesSession.moviesSession
        .filter((movie) => movie.name === payload)
        .map((moviesList) => moviesList.movies)
    )

    yield put(onGetMoviesByGenreSuccess(moviesByGenre))
  } catch (error) {
    yield put(onGetMoviesByGenreFail(error))
  }
}

export default all([
  takeLatest('genreByMovies/onGetMoviesByGenre', onGetMoviesByGenre)
])
