import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../../services/axiosInstance";
import { IProduct, IProductsState } from "../../../interfaces/IProduct";
import { IError } from "../../../interfaces/IError";

const initialState = {
  products: [] as Array<IProduct>,
  loading: "idle",
  error: null,
} as IProductsState;

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
      state.error = action.payload as IError;
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
        const errorState: IError = {
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
