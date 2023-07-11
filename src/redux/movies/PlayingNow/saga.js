import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  onGetMoviesPlayingNowSuccess,
  onGetMoviesPlayingNowFail,
} from "./slice";
import { constants } from "../../../services/constants";

// import axios from "axios";
import api from "../../../services/api";

import data from "../../../data/listMovie.json";

function* onGetMoviesPlayingNow() {
  try {
    if (data) {
      yield put(onGetMoviesPlayingNowSuccess(data));
    }
    // const { data } = yield call(
    //   api.get,
    //   constants.events.GET_MOVIES_PLAYING_NOW
    // );
    // const movies = data.results
    // console.log(movies)
    // yield put(onGetMoviesPlayingNowSuccess(movies));
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
