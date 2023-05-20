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

const storageUser = localStorage.getItem("user");
const storageToken = localStorage.getItem("token")

const initialState: AuthState = {
    isLoggedIn: Boolean(storageToken && storageUser),
  user: storageUser!=null ? JSON.parse(storageUser) : { email: null, token: null, role: "guest", fullName: null, dob: "" },
  role: "guest",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("token", action.payload.token || "");
      state.role = action.payload.role;
    },
  },
});

export const {
  
  changeUser,
} = authSlice.actions;

export default authSlice.reducer;
