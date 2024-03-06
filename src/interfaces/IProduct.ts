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
}

// interface Rating {
//   rate: string;
//   count: number;
// };

export interface IProductsState {
  products: IProduct[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: IError | null;
}
