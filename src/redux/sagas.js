import {all} from 'redux-saga/effects'
import movies from './movies/saga'

export default function* rootSaga() {
  return yield all([movies])
}