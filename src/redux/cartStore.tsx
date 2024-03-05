import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import productsSlice from "./features/products/productsSlice";

export const cartStore = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof cartStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof cartStore.dispatch;
