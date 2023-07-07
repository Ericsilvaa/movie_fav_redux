import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    onGetMovies: (state) => {
      state.loading = true;
    },
    onGetMoviesSuccess: (state, action) => {
      state.movies.push(...action.payload);
      state.loading = false;
    },
    onGetMoviesFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// export slices
export const { onGetMovies, onGetMoviesSuccess, onGetMoviesFail } =
  moviesSlice.actions;

export default moviesSlice.reducer;
