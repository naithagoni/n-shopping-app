export type IProducts = {
  limit: number;
  products:IProduct[];
  skip: number;
  total: number;
};

export type IProduct = {
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
};

// type Rating = {
//   rate: string;
//   count: number;
// };
