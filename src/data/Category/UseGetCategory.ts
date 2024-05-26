import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../BaseUrl";

interface CategoryItemProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  // add Attribute
  LoveQuantity: number;
  ProductQuantity: number;
}

export const useGetCategory = () => {
  const fetchCategory = () =>
    axios.get<[]>(BaseUrl("products/categories", "")).then((res) => res.data);
  const {
    data: Categories,
    isLoading: CategoriesLoading,
    error: CategoriesError,
  } = useQuery<[],Error>({
    queryKey: ["Category"],
    queryFn: fetchCategory,
  });
  return { Categories, CategoriesLoading, CategoriesError };
};

export const useGetCategoryItem = (VarUrl: string) => {
  const fetchCategoryItem = () =>
    axios
      .get<CategoryItemProps[]>(BaseUrl("products/category/", VarUrl))
      .then((res) => res.data);
  const {
    data: CategoriesItem,
    isLoading: CategoriesItemLoading,
    error: CategoriesItemError,
  } = useQuery<CategoryItemProps[] ,Error>({
    queryKey: ["CategoryItem"],
    queryFn: fetchCategoryItem,
  });
  return { CategoriesItem, CategoriesItemLoading, CategoriesItemError };
};
