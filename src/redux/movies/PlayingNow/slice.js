import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesNowPlayind: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "moviesPlayingNow",
  initialState,
  reducers: {
    onGetMoviesPlayingNow: (state) => {
      state.loading = true;
    },
    onGetMoviesPlayingNowSuccess: (state, {payload}) => {
      return {
        ...state,
        moviesNowPlayind: payload.filter(movie => movie.overview).slice(0,6),
        loading: false
      }

    },
    onGetMoviesPlayingNowFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// export slices
export const {
  onGetMoviesPlayingNow,
  onGetMoviesPlayingNowSuccess,
  onGetMoviesPlayingNowFail,
} = moviesSlice.actions;

export default moviesSlice.reducer;



