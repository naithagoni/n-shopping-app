import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axiosInstance from "../../../services/axiosInstance";
import { IProduct } from "../../../types/IProduct";

interface ProductsState {
  products: IProduct[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
}

const initialState = {
  products: [] as Array<IProduct>,
  loading: "idle",
  error: "",
} as ProductsState;

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.products = [];
      state.loading = "pending";
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message ?? "Unknown error";
    });
  },
});

// Create the thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const productList = await axiosInstance.get("/products");
      return productList.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: (error as Error).message ?? "Unknown error",
      });
    }
  }
);

export const selectProducts = createSelector(
  (state) => state.products.products,
  (state) => state.products.loading,
  (state) => state.products.error,
  (products, loading, error) => ({
    products,
    loading,
    error,
  })
);

export default productsSlice.reducer;
