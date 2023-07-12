import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  onGetMoviesPlayingNowSuccess,
  onGetMoviesPlayingNowFail,
} from "./slice";
import { moviesPlayingNow } from "../../../services/apiCalls";



function* onGetMoviesPlayingNow() {
  try {

    const data = yield call(moviesPlayingNow);
    yield put(onGetMoviesPlayingNowSuccess(data));
  } catch (error) {
    console.log("caiu no catch redux");
    yield put(onGetMoviesPlayingNowFail(error.message));
  }
}

export default all([
  takeLatest("moviesPlayingNow/onGetMoviesPlayingNow", onGetMoviesPlayingNow),
]);

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
