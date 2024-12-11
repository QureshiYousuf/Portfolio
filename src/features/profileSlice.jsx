import { createSlice } from "@reduxjs/toolkit";
import { useRef } from "react";

const initialState = {
  scroll: false,
};

const profilesSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    scrollToggle(state, action) {
      state.scroll = action.payload;
    },
    scrollToSection(state, action) {
      state.scroll = action.payload;
    },
  },
});

export const { scrollToggle } = profilesSlice.actions;
export default profilesSlice.reducer;
