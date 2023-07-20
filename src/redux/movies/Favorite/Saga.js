import {
  all,
  takeLatest,
  fork,
  call,
  put,
  take,
  select,
} from "redux-saga/effects";
import {
  addMovieFavoriteFailure,
  addMovieFavoriteSuccess,
  removeFavoriteFailure,
  removeFavoriteSucces,
} from "./slice";

import {
  addMovieList,
  hasMovieLocalStorage,
  removeFavorites,
} from "../../../services/getFavoritesCalls";


// chamado ao LOCALSTORAGE
function* getMoviesFavorites() {
  try {
    const hasMovie = yield call(hasMovieLocalStorage);

    yield put({
      type: "moviesFavorites/getMoviesFavoritesLocalStorage",
      payload: hasMovie,
    });
  } catch (error) {
    // yield put({type: 'moviesFavorites/getMoviesFavoritesLocalStorage' , payload: hasMovie})
    console.log("deu ruim no local storage");
  }
}

function* addMovieFavorite({ payload }) {
  try {
    // yield take("moviesFavorites/getMoviesFavoritesLocalStorage");
    const { data } = yield select((state) => state.favorite);

    const newList = yield call(addMovieList, data, payload);
    yield put(addMovieFavoriteSuccess(newList));
  } catch (error) {
    yield put(addMovieFavoriteFailure(error));
    console.log("caiu aqui");
  }
}

function* removeFavorite({ payload }) {
  console.log(payload);
  try {
    // yield take("moviesFavorites/getMoviesFavoritesLocalStorage");
    const { data } = yield select((state) => state.favorite);
    console.log(data);
    const newList = yield call(removeFavorites, data, payload);
    yield put(removeFavoriteSucces(newList));
  } catch (error) {
    yield put(removeFavoriteFailure(error));
  }
}

export default all([
  // fork(), realiza uma operação não bloqueante com a função passada
  fork(getMoviesFavorites),
  takeLatest("moviesFavorites/addMovieFavorite", addMovieFavorite),
  takeLatest("moviesFavorites/removeFavorite", removeFavorite),
]);
