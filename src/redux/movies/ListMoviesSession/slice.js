import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesSession: [],
  error: null,
  loading: false,
};

export const movieSessionSlice = createSlice({
  name: "listMoviesSession",
  initialState,
  reducers: {
    onGetListMoviesSession: (state) => {
      state.loading = true;
    },
    onGetListMoviesSessionSuccess: (state, { payload }) => {
      (state.loading = false), (state.moviesSession = payload);
    },
    onGetListMoviesSessionFail: (state, payload) => {
      (state.loading = false), (state.moviesSession = payload);
    },
  },
});

export const {
  onGetListMoviesSession,
  onGetListMoviesSessionSuccess,
  onGetListMoviesSessionFail,
} = movieSessionSlice.actions;

export default movieSessionSlice.reducer;
