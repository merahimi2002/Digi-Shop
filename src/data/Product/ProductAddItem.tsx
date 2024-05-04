import useProductsList from "./UseGetProduct";
import useLoveProduct from "../../hooks/useLoveProduct";

const ProductAddItem = () => {
  const VarUrl = "?limit=" + 5;
  const { data, error, isLoading } = useProductsList(VarUrl);
  const { QuantityLove, LoveID } = useLoveProduct();

  //set the default to 0
  data?.map((index) => {
    if (index.LoveQuantity == null) {
      index.LoveQuantity = 0;
    }
  });

  //set Value
  data?.map((i) => {
    if (i.id === LoveID) {
      i.LoveQuantity = QuantityLove;
    }
  });

  return { data, error, isLoading };
};

export default ProductAddItem;
