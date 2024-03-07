import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../../services/axiosInstance";
import {
  ILoadingState,
  IProduct,
  IProducts,
  IProductsState,
} from "../../../interfaces/IProduct";
import { IError } from "../../../interfaces/IError";

const initialState: IProductsState = {
  initProducts: {
    limit: 0,
    products: [] as IProduct[],
    skip: 0,
    total: 0,
  } as IProducts,
  loading: ILoadingState.IDLE,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.initProducts.products = [];
      state.loading = ILoadingState.PENDING;
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.initProducts = payload;
      state.loading = ILoadingState.SUCCESS;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.payload as IError;
      state.loading = ILoadingState.ERROR;
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
  (state) => state.productsStore.initProducts, // productsStore refers to the slice name defined in your Redux store.
  (state) => state.productsStore.loading,
  (state) => state.productsStore.error,
  (products, loading, error) => ({
    products,
    loading,
    error,
  })
);

export default productsSlice.reducer;
