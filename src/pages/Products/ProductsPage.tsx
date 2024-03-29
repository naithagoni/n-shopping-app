import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProducts,
  selectProducts,
} from "@redux/features/products/productsSlice";
// import useFetchProducts from "@hooks/useFetchProducts";
import { AppDispatch } from "@redux/store";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "@pages/ErrorPage/ErrorPage";
import { ILoadingState, IProducts } from "@/interfaces/IProduct";
import { IError } from "@/interfaces/IError";
import ProductCard from "./ProductsCard";

const ProductsPage = () => {
  // const { products, error, isLoading } = useFetchProducts();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Using Redux Thunk
  const {
    products,
    loading,
    error,
  }: { products: IProducts; loading: ILoadingState; error: IError } =
    useSelector(selectProducts);

  if (loading === ILoadingState.PENDING) {
    return <LoadingSpinner />;
  }

  if (loading === ILoadingState.ERROR) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      {loading === ILoadingState.SUCCESS && (
        <ProductCard products={products.products} />
      )}
    </>
  );
};

export default ProductsPage;
