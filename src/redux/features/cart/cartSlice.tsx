import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/IProduct";

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToBag(state, action) {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductToBag } = cartSlice.actions;

export default cartSlice.reducer;
