import { all, takeEvery, call, put } from "redux-saga/effects";

import { onGetMovieByIdFail, onGetMovieByIdSuccess } from "./slice";

import {movieById} from '../../../services/apiCalls'



export function* onGetMovieById({payload}) {
  try {
    const response = yield call(movieById, payload);
    yield put(onGetMovieByIdSuccess(response));
  } catch (error) {
    console.log('caiu no cacht')
    yield put(onGetMovieByIdFail(error.message))
  }
}




export default all([takeEvery("movieID/onGetMovieById", onGetMovieById)]);
