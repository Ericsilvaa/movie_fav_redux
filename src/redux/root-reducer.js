import { combineReducers } from "@reduxjs/toolkit";

// reducers
import moviesPlayingNowReducer from './movies/PlayingNow/slice'
import genresReducer from './movies/Genre/slice'
import moviesSessionReducer from './movies/ListMoviesSession/slice'

export default combineReducers({
  genres: genresReducer,
  moviesPlayingNow: moviesPlayingNowReducer,
  listMoviesSession: moviesSessionReducer

})