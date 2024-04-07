import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ProductsListProps {
  id: number;
  title: string;
  price: number;
}

const UseProductList = () => {
  const fetchProducts = () =>
    axios
      .get<ProductsListProps[]>("https://fakestoreapi.com/products")
      .then((res) => res.data);
  return useQuery<ProductsListProps[], Error>({
    queryKey: ["Products"],
    queryFn: fetchProducts,
  });
};

export default UseProductList;
