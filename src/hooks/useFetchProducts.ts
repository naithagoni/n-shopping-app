import { useCallback, useEffect, useState } from "react";
import { AxiosError } from "axios";
import useAbortController from "./useAbortController";
import axiosInstance from "../services/axiosInstance";
import { Product } from "../types/Product";

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError>();
  const { getAbortSignal } = useAbortController();

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const products = await axiosInstance.get("/products", {
        signal: getAbortSignal(),
      });
      setProducts(products.data);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  }, [getAbortSignal]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error };
};

export default useFetchProducts;
