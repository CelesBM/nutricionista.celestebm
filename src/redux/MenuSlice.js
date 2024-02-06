import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  scrollTop: 0,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setScrollTop: (state, action) => {
      state.scrollTop = action.payload;
    },
  },
});

export const { toggleMenu, setScrollTop } = menuSlice.actions;
export const selectIsMenuOpen = (state) => state.menu.isMenuOpen;
export default menuSlice.reducer;
