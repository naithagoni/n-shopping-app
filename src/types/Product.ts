export type Product = {
  id: number;
  title: string;
  description: string;
  discountPercentage: string;
  price: string;
  category: string;
  brand: string;
  thumbnail: string;
  images: Array<string>;
  rating: Rating;
};

export type Rating = {
  rate: string;
  count: number;
};
