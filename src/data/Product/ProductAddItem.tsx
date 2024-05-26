import useProductsList from "./UseGetProduct";
import AddLoveQuantity from "../Services/AddLoveQuantity";
import AddProductQuantity from "../Services/AddProductQuantity";

const ProductAddItem = (LimitNumber?: number) => {
  const VarUrl = "?limit=" + LimitNumber;
  const { Product, ProductError, ProductLoading } = useProductsList(VarUrl);
  const { QuantityLove, LoveID } = AddLoveQuantity();
  const { ProductQuantity, ProductName } = AddProductQuantity();

  //set love quantity & Product Quantity default to 0
  Product?.map((index) => {
    if (index.LoveQuantity == null) {
      index.LoveQuantity = 0;
      index.ProductQuantity = 0;
    }
  });

  //set love quantity Value
  Product?.map((i) => {
    if (i.id === LoveID) {
      i.LoveQuantity = QuantityLove;
    }
  });

  //Save in local storage set love quantity valu
  localStorage.setItem(LoveID.toString(), QuantityLove.toString());
  Product?.map((i) => {
    if (localStorage.getItem(i.id.toString()) !== null) {
      i.LoveQuantity = Number(localStorage.getItem(i.id.toString()));
    }
  });

  // set product quantity Value
  Product?.map((i) => {
    if (i.title === ProductName) {
      i.ProductQuantity = ProductQuantity;
    }
  });

  return { Product, ProductError, ProductLoading };
};

export default ProductAddItem;
