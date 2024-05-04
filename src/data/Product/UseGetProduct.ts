import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../BaseUrl";

interface ProductsProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  // add Attribute
  LoveQuantity: number;
}

const useProductList = () => {
  const str = "?limit=5";
  const fetchProducts = () =>
    axios
      .get<ProductsProps[]>(BaseUrl("products", str))
      .then((res) => res.data);
  return useQuery<ProductsProps[], Error>({
    queryKey: ["Products"],
    queryFn: fetchProducts,
  });
};

export default useProductList;
