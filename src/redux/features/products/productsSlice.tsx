import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../../services/axiosInstance";
import { IProduct } from "../../../types/IProduct";

interface ErrorState {
  message: string;
  status: string | number;
}

interface ProductsState {
  products: IProduct[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: ErrorState | null;
}

const initialState = {
  products: [] as Array<IProduct>,
  loading: "idle",
  error: null,
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
      state.error = action.payload as ErrorState;
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
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorState: ErrorState = {
          message: err.message,
          status: err.response?.status || "Unknown",
        };
        return thunkAPI.rejectWithValue({
          error: errorState,
        });
      } else {
        throw err;
      }
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
