import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProducts,
  selectProducts,
} from "../../redux/features/products/productsSlice";
// import useFetchProducts from "../../hooks/useFetchProducts";
import { AppDispatch } from "../../redux/store";
import Card from "../../components/Card/Card";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../ErrorPage/ErrorPage";
import { ILoadingState, IProducts } from "../../interfaces/IProduct";
import { IError } from "../../interfaces/IError";

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
    <>{loading === ILoadingState.SUCCESS && <Card products={products} />}</>
  );
};

export default ProductsPage;
