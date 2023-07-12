import { all, call, put, take, takeLatest } from "redux-saga/effects";

import {
  onGetListMoviesSessionSuccess,
  onGetListMoviesSessionFail,
} from "./slice";

import { listSession } from "../../../services/apiCalls";

export function* onGetListMoviesSession() {
  try {

    const listDividerSession = yield call(listSession);

    yield put(onGetListMoviesSessionSuccess(listDividerSession));
  } catch (error) {
    yield put(onGetListMoviesSessionFail(error.message));
    console.log("caiu no catch");
  }
}

export default all([
  takeLatest(
    "listMoviesSession/onGetListMoviesSession",
    onGetListMoviesSession
  ),
]);
