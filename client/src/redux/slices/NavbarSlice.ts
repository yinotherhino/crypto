import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DropTypes } from "../../components/Navbar/Navbar";
import { AxiosError } from "axios";

export interface IToast {
  message: string | null;
  variant?: "success" | "error" | "warning";
  time?: number;
}

export interface NavbarState {
  showHamburger: boolean;
  showLinkDrop: boolean;
  showToast: IToast;
  isToastOpen: boolean;
  dropType: DropTypes | null;
  showAuth: "login" | "register" | "forgot" | null;
}

const initialState: NavbarState = {
  showHamburger: false,
  showLinkDrop: false,
  dropType: null,
  showAuth: null,
  showToast: { message: null, variant: "warning" },
  isToastOpen: false,
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
    changeAuth: (state, action: PayloadAction<"login" | "register" | "forgot" | null>) => {
      state.showAuth = action.payload;
    },
    changeToast: (state, action: PayloadAction<IToast>) => {
      state.isToastOpen = true;
      state.showToast = {time:undefined, ...action.payload};
    },
    hideToast: (state) => {
      state.isToastOpen = false;
    },
    handleServerError: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      if(action.payload && action.payload instanceof AxiosError){
        state.showToast =
          action.payload.code === "ERR_NETWORK"
            ? { message: "Network Error", variant: "error" }
            : { message: action.payload.response?.data.Message, variant: "error" };
      }
      state.isToastOpen = true;
    },
  },
});

export const {
  changeHamburger,
  changeLinkDrop,
  changeDropType,
  changeAuth,
  changeToast,
  hideToast,
  handleServerError
} = navbarSlice.actions;

export default navbarSlice.reducer;
