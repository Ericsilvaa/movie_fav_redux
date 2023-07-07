import {
  all,
  call,
  fork,
  put,
  takeLatest,
} from "redux-saga/effects";
import { onGetMoviesSuccess, onGetMoviesFail } from "./slice";

import axios from "axios";

function* onGetMovies() {
  try {
    const {data} = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users/"
    );
    yield put(onGetMoviesSuccess(data));
  } catch (error) {
    yield put(onGetMoviesFail(error.message));
  }
}

export default all([takeLatest("movies/onGetMovies", onGetMovies)]);

// const moviesSagas = [
//   fork(onGetMovies),
// ]
// export default all([...moviesSagas])

// const contactSagas = [
//   fork(onLoadContacts),
//   fork(onDeleteContact),
//   fork(onAddContact),
//   fork(onEditContact),
// ];

// export default function* rootSaga() {
//   yield all([...contactSagas]);
// }
