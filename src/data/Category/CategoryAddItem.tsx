import { useGetCategoryItem } from "../Category/UseGetCategory";
import useLoveProduct from "../Services/AddLoveQuantity";

const CategoryAddItem = (Category: string) => {
  const { CategoriesItem, CategoriesItemError, CategoriesItemLoading } =
    useGetCategoryItem(Category);
  const { QuantityLove, LoveID } = useLoveProduct();

  //set love quantity & Product Quantity default to 0
  CategoriesItem?.map((index) => {
    if (index.LoveQuantity == null) {
      index.LoveQuantity = 0;
      index.ProductQuantity = 0;
    }
  });

  //set love quantity Value
  CategoriesItem?.map((i) => {
    if (i.id === LoveID) {
      i.LoveQuantity = QuantityLove;
    }
  });

  //Save in local storage set love quantity valu
  localStorage.setItem(LoveID.toString(), QuantityLove.toString());
  CategoriesItem?.map((i) => {
    if (localStorage.getItem(i.id.toString()) !== null) {
      i.LoveQuantity = Number(localStorage.getItem(i.id.toString()));
    }
  });

  return { CategoriesItem, CategoriesItemError, CategoriesItemLoading };
};

export default CategoryAddItem;
