import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataGenre: [],
  genreSession: false,
  loading: false,
  error: null
}

const genreSlice = createSlice({
  name: 'genreByMovies',
  initialState,
  reducers: {
    onGetMoviesByGenre: (state, payload) => {
      state.dataGenre = payload
    },
    onGetMoviesByGenreSuccess: (state, { payload }) => {
      return {
        ...state,
        dataGenre: payload
      }
    },
    onGetMoviesByGenreFail: (state, { payload }) => {
      state.dataGenre = ['Erro']
    }
  }
})

export const movies = (state) =>
  state.genres.dataGenre.filter((movies) => movies.movies)

export const {
  onGetMoviesByGenre,
  onGetMoviesByGenreSuccess,
  onGetMoviesByGenreFail
} = genreSlice.actions

export default genreSlice.reducer
