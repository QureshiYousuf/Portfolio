import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { scrollToggle } = profilesSlice.actions;
export default profilesSlice.reducer;
