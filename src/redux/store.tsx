import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./features/cart/cartSlice";
import productsSlice from "./features/products/productsSlice";
import filteredProductsSlice from "./features/products/filteredProductsSlice";

export const Store = configureStore({
  reducer: {
    // 'cartStore' is the key used to specify where the state managed by cartSlice will be located within the Redux store's state tree.
    // This key is used in the store configuration to associate the cartSlice reducer with the 'cartStore' portion of the state.
    cartStore: cartSlice,
    productsStore: productsSlice,
    filteredProductsStore: filteredProductsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
