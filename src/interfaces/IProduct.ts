import { IError } from "./IError";

export interface IProducts {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  discountPercentage: string;
  price: string;
  category: string;
  brand: string;
  thumbnail: string;
  images: string[];
  rating: string;
  stock: number;
  qty?: number;
}

// interface Rating {
//   rate: string;
//   count: number;
// };

export enum ILoadingState {
  IDLE = "idle",
  PENDING = "pending",
  SUCCESS = "success",
  ERROR = "error",
}

export interface IProductsState {
  initProducts: IProducts;
  loading: ILoadingState;
  error: IError | null;
}
export interface IFilteredProductsState {
  initFilteredProducts: IProducts;
  loading: ILoadingState;
  error: IError | null;
}
