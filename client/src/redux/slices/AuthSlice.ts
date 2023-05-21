import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  email: string | null;
  token: string | null;
  role: Role;
  fullName: string | null;
  dob?: string;
}
export type Role = "user" | "admin" | "premium" | "guest";
export interface AuthState {
  user: IUser;
  role: Role;
  isLoggedIn: boolean;
}

const initialUser: IUser = {
  email: null,
  token: null,
  role: "guest",
  fullName: null,
  dob: "",
};
const storageUser = localStorage.getItem("user");
const storageToken = localStorage.getItem("token");

const initialState: AuthState = {
  isLoggedIn: Boolean(storageToken && storageUser),
  user: storageUser != null ? JSON.parse(storageUser) : initialUser,
  role: "guest",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<IUser>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("token", action.payload.token || "");
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = initialUser;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.role = "guest";
    },
  },
});

export const { logout, changeUser } = authSlice.actions;

export default authSlice.reducer;
