// productCurrentlyShowing
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ProductCurrentlyShowing = "yearly" | "monthly" | "biannually" | "platinum";
export type Plan = "basic" | "advanced" | "gold" | "platinum";

interface ProductState {
  productCurrentlyShowing: ProductCurrentlyShowing;
  plan: Plan;
}
const initialState: ProductState = {
  productCurrentlyShowing: "yearly",
  plan: "gold",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    changeProductCurrentlyShowing: (
      state,
      action: PayloadAction<ProductCurrentlyShowing>
    ) => {
      state.productCurrentlyShowing = action.payload;
    },
    changePlan: (state, action: PayloadAction<Plan>) => {
      state.plan = action.payload;
    },
  },
});

export const { changeProductCurrentlyShowing, changePlan } = productSlice.actions;

export default productSlice.reducer;
