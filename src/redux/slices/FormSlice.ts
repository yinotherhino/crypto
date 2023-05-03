import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type FormType = "login" | "register" | "reset";
export interface FormState {
  formType: FormType;
}

const initialState: FormState = {
  formType: "register",
};

export const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    changeForm: (state, action: PayloadAction<FormType>) => {
      state.formType = action.payload;
    },
  },
});

export const { changeForm } = formSlice.actions;

export default formSlice.reducer;
