import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataGenre: ['Eric'],
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    onGetGenre: (state, payload) => {
      state.dataGenre = payload;
    },
  },
});

export const { onGetGenre } = genreSlice.actions;

export default genreSlice.reducer;
