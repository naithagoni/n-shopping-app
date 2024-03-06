import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProducts,
  selectProducts,
} from "../../redux/features/products/productsSlice";
// import useFetchProducts from "../../hooks/useFetchProducts";
import { AppDispatch } from "../../redux/cartStore";
import Card from "../../components/Card/Card";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../ErrorPage/ErrorPage";
import { ILoadingState } from "../../interfaces/IProduct";

const ProductsPage = () => {
  // const { products, error, isLoading } = useFetchProducts();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Using Redux Thunk
  const { products, loading, error } = useSelector(selectProducts);

  if (loading === ILoadingState.PENDING) {
    return <LoadingSpinner />;
  }

  if (loading === ILoadingState.ERROR) {
    return <ErrorPage error={error.error} />;
  }

  return (
    <>{loading === ILoadingState.SUCCESS && <Card products={products} />}</>
  );
};

export default ProductsPage;
