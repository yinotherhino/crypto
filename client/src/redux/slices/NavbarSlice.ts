import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DropTypes } from "../../components/Navbar/Navbar";

export interface IToast {
  message: string | null;
  variant?: "success" | "error" | "warning";
}
type Role = "user" | "admin" | "premium" | "guest";

export interface IUser {
  email: string | null;
  token: string | null;
  role: Role;
  fullName: string | null;
  dob?: string;
}
export interface NavbarState {
  showHamburger: boolean;
  showLinkDrop: boolean;
  showToast: IToast;
  isToastOpen: boolean;
  dropType: DropTypes | null;
  showAuth: "login" | "register" | null;
  user: IUser;
  role: Role;
}

const initialState: NavbarState = {
  showHamburger: false,
  showLinkDrop: false,
  dropType: null,
  showAuth: null,
  showToast: { message: null, variant: "warning" },
  isToastOpen: false,
  user: { email: null, token: null, role: "guest", fullName: null, dob: "" },
  role: "guest",
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
    changeToast: (state, action: PayloadAction<IToast>) => {
      state.isToastOpen = true;
      state.showToast = action.payload;
    },
    hideToast: (state) => {
      state.isToastOpen = false;
    },
    changeUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.role = action.payload.role;
    },
  },
});

export const {
  changeHamburger,
  changeLinkDrop,
  changeDropType,
  changeAuth,
  changeToast,
  changeUser,
  hideToast,
} = navbarSlice.actions;

export default navbarSlice.reducer;
