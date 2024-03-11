import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "@services/axiosInstance";
import {
  ILoadingState,
  IProducts,
  IProduct,
  IFilteredProductsState,
} from "@/interfaces/IProduct";
import { IError } from "@/interfaces/IError";

const initialState: IFilteredProductsState = {
  initFilteredProducts: {
    limit: 0,
    products: [] as IProduct[],
    skip: 0,
    total: 0,
  } as IProducts,
  loading: ILoadingState.IDLE,
  error: null,
};

export const filteredProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handling actions for fetching filtered products
    builder.addCase(fetchFilteredProducts.pending, (state) => {
      state.loading = ILoadingState.PENDING;
    });
    builder.addCase(fetchFilteredProducts.fulfilled, (state, { payload }) => {
      state.initFilteredProducts = payload;
      state.loading = ILoadingState.SUCCESS;
    });
    builder.addCase(fetchFilteredProducts.rejected, (state, action) => {
      state.error = action.payload as IError;
      state.loading = ILoadingState.ERROR;
    });
  },
});

// Create the thunk for fetching filtered products
export const fetchFilteredProducts = createAsyncThunk(
  "products/fetchFilteredProducts",
  async (searchQuery: string, thunkAPI) => {
    try {
      const productList = await axiosInstance.get(
        `/products/search?q=${searchQuery}`
      );
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

export const selectFilteredProducts = createSelector(
  (state) => state.filteredProductsStore.initFilteredProducts, // filteredProducts refers to the slice name defined in your Redux store.
  (state) => state.filteredProductsStore.loading,
  (state) => state.filteredProductsStore.error,
  (filteredProducts, loading, error) => ({
    filteredProducts,
    loading,
    error,
  })
);

export default filteredProductsSlice.reducer;
