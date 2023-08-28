import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
   isDepositOpen: boolean;
   depositWalletType: string;
}

const initialState: ModalState = {
   isDepositOpen: false,
   depositWalletType: "BTC",
};

export const modalSlice = createSlice({
   name: "modal",
   initialState,
   reducers: {
      showDepositModal: (state, action: PayloadAction<string>) => {
         state.depositWalletType = action.payload;
         state.isDepositOpen = true;
      },
      closeDepositModal: (state) => {
         state.isDepositOpen = false;
      },
      changeDepositWalletType: (state, action: PayloadAction<string>) => {
         state.depositWalletType = action.payload;
      }
   },
});

export const { closeDepositModal, showDepositModal, changeDepositWalletType } = modalSlice.actions;

export default modalSlice.reducer;
