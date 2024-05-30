import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "./BaseUrl";

interface ProductsProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const useGetProduct = (VarUrl: string) => {
  const fetchProducts = () =>
    axios
      .get<ProductsProps[]>(BaseUrl("products", VarUrl))
      .then((res) => res.data);
  const {
    data: Product,
    isLoading: ProductLoading,
    error: ProductError,
  } = useQuery<ProductsProps[], Error>({
    queryKey: ["Products"],
    queryFn: fetchProducts,
  });
  return { Product, ProductLoading, ProductError };
};

export default useGetProduct;
