import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DropTypes } from "../../components/Navbar/Navbar";

export interface NavbarState {
  showHamburger: boolean;
  showLinkDrop: boolean;
  dropType: DropTypes | null;
  showAuth: "login" | "register" | null;
}

const initialState: NavbarState = {
  showHamburger: false,
  showLinkDrop: false,
  dropType: null,
  showAuth: null,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    changeHamburger: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.showHamburger = !state.showHamburger;
    },
    changeLinkDrop: (state, action: PayloadAction<boolean | undefined>) => {
      if (action?.payload !== undefined) {
        state.showLinkDrop = action.payload;
        return;
      }
      state.showLinkDrop = !state.showLinkDrop;
    },
    changeDropType: (state, action: PayloadAction<DropTypes | null>) => {
      state.dropType = action.payload;
    },
    changeAuth: (state, action: PayloadAction<"login" | "register" | null>) => {
      state.showAuth = action.payload;
    },
  },
});

export const { changeHamburger, changeLinkDrop, changeDropType, changeAuth } =
  navbarSlice.actions;

export default navbarSlice.reducer;
