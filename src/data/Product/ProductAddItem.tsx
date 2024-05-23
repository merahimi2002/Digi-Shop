import useProductsList from "./UseGetProduct";
import useLoveProduct from "./useLoveProduct";

const ProductAddItem = (LimitNumber?: number) => {
  const VarUrl = "?limit=" + LimitNumber;
  const { Product, ProductError, ProductLoading } = useProductsList(VarUrl);
  const { QuantityLove, LoveID } = useLoveProduct();

  //set the default to 0
  Product?.map((index) => {
    if (index.LoveQuantity == null) {
      index.LoveQuantity = 0;
    }
  });

  //set Value
  Product?.map((i) => {
    if (i.id === LoveID) {
      i.LoveQuantity = QuantityLove;
    }
  });

  return { Product, ProductError, ProductLoading };
};

export default ProductAddItem;
