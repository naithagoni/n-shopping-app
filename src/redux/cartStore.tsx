import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";

export const cartStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof cartStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof cartStore.dispatch;
