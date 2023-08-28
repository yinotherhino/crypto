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
         state.isDepositOpen = true;
         state.depositWalletType = action.payload;
      },
      closeDepositModal: (state) => {
         state.isDepositOpen = false;
      },
   },
});

export const { closeDepositModal, showDepositModal } = modalSlice.actions;

export default modalSlice.reducer;
