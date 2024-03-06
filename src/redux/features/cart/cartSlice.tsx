import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces/IProduct";

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, action) {
      state.push(action.payload);
    },

    removeProductFromCart(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
