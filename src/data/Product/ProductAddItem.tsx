import useProductsList from "./UseGetProduct";
import useLoveProduct from "../services/AddLoveQuantity";

const ProductAddItem = (LimitNumber?: number) => {
  const VarUrl = "?limit=" + LimitNumber;
  const { Product, ProductError, ProductLoading } = useProductsList(VarUrl);
  const { QuantityLove, LoveID } = useLoveProduct();

  //set love quantity default to 0
  Product?.map((index) => {
    if (index.LoveQuantity == null) {
      index.LoveQuantity = 0;
    }
  });

  //set love quantity Value
  Product?.map((i) => {
    if (i.id === LoveID) {
      i.LoveQuantity = QuantityLove;
    }
  });

  //Save in local storage
  localStorage.setItem(LoveID.toString(), QuantityLove.toString());

  // set love quantity valu from local storage
  Product?.map((i) => {
    if(localStorage.getItem(i.id.toString())!== null){
      i.LoveQuantity = Number(localStorage.getItem(i.id.toString()))
    }
  });

  return { Product, ProductError, ProductLoading };
};

export default ProductAddItem;
