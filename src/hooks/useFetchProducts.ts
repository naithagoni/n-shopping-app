import { useCallback, useEffect, useState } from "react";
import { AxiosError } from "axios";
import useAbortController from "./useAbortController";
import axiosInstance from "../services/axiosInstance";
import { IProducts } from "../types/IProduct";

const useFetchProducts = () => {
  const [products, setProducts] = useState<IProducts>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();
  const { getAbortSignal } = useAbortController();

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const productList = await axiosInstance.get("/products", {
        signal: getAbortSignal(),
      });
      setProducts(productList.data);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setIsLoading(false);
    }
  }, [getAbortSignal]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, isLoading, error, refetch: fetchProducts };
};

export default useFetchProducts;
