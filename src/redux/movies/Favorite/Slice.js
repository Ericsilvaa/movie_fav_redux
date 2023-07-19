import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const moviesFavoritesSlice = createSlice({
  name: "moviesFavorites",
  initialState,
  reducers: {
    getMoviesFavoritesLocalStorage: (state, {payload}) => {
      state.data = payload;
    },
    addMovieFavorite: (state) => {
      state.loading = true;
    },
    addMovieFavoriteSuccess: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    addMovieFavoriteFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    removeFavorite: (state) => {
      state.loading = true;
    },
    removeFavoriteSucces: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    removeFavoriteFailure: (state, { payload }) => {
      state.data.filter(payload);
      state.loading = false;
    },
  },
});

export const {
  addMovieFavorite,
  addMovieFavoriteFailure,
  addMovieFavoriteSuccess,
  getMoviesFavoritesLocalStorage,
  removeFavorite,
  removeFavoriteFailure,
  removeFavoriteSucces,
} = moviesFavoritesSlice.actions;

export default moviesFavoritesSlice.reducer;
