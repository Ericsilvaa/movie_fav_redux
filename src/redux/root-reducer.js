import { combineReducers } from '@reduxjs/toolkit'

// reducers
import moviesFavorites from './movies/Favorite/slice'
import genresReducer from './movies/Genre/slice'
import moviesSessionReducer from './movies/ListMoviesSession/slice'
import moviesByIdReducer from './movies/MovieById/slice'
import moviesPlayingNowReducer from './movies/PlayingNow/slice'

export default combineReducers({
  genres: genresReducer,
  moviesPlayingNow: moviesPlayingNowReducer,
  listMoviesSession: moviesSessionReducer,
  movieId: moviesByIdReducer,
  favorite: moviesFavorites
})
