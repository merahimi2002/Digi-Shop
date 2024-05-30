import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "./BaseUrl";

interface CategoryItemProps {
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

const useGetCategoryItem = (VarUrl: string) => {
  const fetchCategoryItem = () =>
    axios
      .get<CategoryItemProps[]>(BaseUrl("products/category/", VarUrl))
      .then((res) => res.data);
  const {
    data: CategoriesItem,
    isLoading: CategoriesItemLoading,
    error: CategoriesItemError,
  } = useQuery<CategoryItemProps[], Error>({
    queryKey: ["CategoryItem"],
    queryFn: fetchCategoryItem,
  });
  return { CategoriesItem, CategoriesItemLoading, CategoriesItemError };
};

export default useGetCategoryItem;
