import useProductsList from "./UseGetProduct";

const ProductAddItem = (LimitNumber?: number) => {
  const VarUrl = "?limit=" + LimitNumber;
  const { Product, ProductError, ProductLoading } = useProductsList(VarUrl);

  //set love quantity & Product Quantity default to 0
  Product?.map((index) => {
    if (index.LoveQuantity == null) {
      index.LoveQuantity = 0;
      index.ProductQuantity = 0;
    }
  });

  // set love quantity Value & default value in local storage
  Product?.map((i) => {
    const DefaultLoveQuantity = 0;
    if (localStorage.getItem(i.id.toString()) === null) {
      localStorage.setItem(i.id.toString(), DefaultLoveQuantity.toString());
    }
    i.LoveQuantity = Number(localStorage.getItem(i.id.toString()));
  });

  // set product quantity Value & default value in local storage
  Product?.map((i) => {
    const DefaultProductQuantity = 0;
    if (localStorage.getItem(i.title) === null) {
      localStorage.setItem(i.title, DefaultProductQuantity.toString());
    }
    i.ProductQuantity = Number(localStorage.getItem(i.title));
  });

  return { Product, ProductError, ProductLoading };
};

export default ProductAddItem;
