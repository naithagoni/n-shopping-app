import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/interfaces/IProduct";

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

    incrementQty(state, action) {
      const cartId = action.payload;
      const existingItem = state.find((item) => item.id === cartId);
      if (existingItem && existingItem.qty) {
        existingItem.qty += 1;
      }
    },

    decrementQty(state, action) {
      const cartId = action.payload;
      // Check if the item is already exist in the state
      const existingItem = state.find((item) => item.id === cartId);
      if (existingItem && existingItem.qty && existingItem.qty > 1) {
        existingItem.qty -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProductToCart,
  removeProductFromCart,
  incrementQty,
  decrementQty,
} = cartSlice.actions;

export default cartSlice.reducer;
