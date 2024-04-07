import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../BaseUrl";

interface ProductsListProps {
  id: number;
  title: string;
  price: number;
}

const useProductList = () => {
  const fetchProducts = () =>
    axios
      .get<ProductsListProps[]>(BaseUrl("products"))
      .then((res) => res.data);
  return useQuery<ProductsListProps[], Error>({
    queryKey: ["Products"],
    queryFn: fetchProducts,
  });
};

export default useProductList;
