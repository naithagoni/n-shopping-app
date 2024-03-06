import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProducts,
} from "../../redux/features/products/productsSlice";
// import useFetchProducts from "../../hooks/useFetchProducts";
import { AppDispatch } from "../../redux/cartStore";
import Card from "../../components/Card/Card";

const ProductsPage = () => {
  // const { products, error, isLoading } = useFetchProducts();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Using Redux Thunk
  const { products, loading, error } = useSelector(selectProducts);

  if (loading === "pending") {
    return (
      <>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </>
    );
  }

  if (loading === "failed") {
    return (
      <>
        <div role="alert" className="alert alert-error mt-6">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div>
              <span>Error! {error}</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <>{loading === "succeeded" && <Card products={products} />}</>;
};

export default ProductsPage;
