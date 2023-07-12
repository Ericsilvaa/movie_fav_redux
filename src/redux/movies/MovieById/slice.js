import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieID: [],
  loading: false,
  error: null,
};

export const movieSlice = createSlice({
  name: "movieID",
  initialState,
  reducers: {
    onResetMovieId: (state) => {
      state.movieID = [];
      state.loading = false;
      state.error = null;
    },
    onGetMovieById: (state) => {
      state.loading = true;
    },
    onGetMovieByIdSuccess: (state, { payload }) => {
      state.loading = false;
      state.movieID = payload;
    },
    onGetMovieByIdFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  onGetMovieById,
  onGetMovieByIdSuccess,
  onGetMovieByIdFail,
  onResetMovieId,
} = movieSlice.actions;

export default movieSlice.reducer;
