import { combineReducers } from "@reduxjs/toolkit";
import moviesReducer from './movies/slice'

export default combineReducers({
  movies: moviesReducer,
})