import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "./BaseUrl";


const useGetCategory = () => {
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

export default useGetCategory


