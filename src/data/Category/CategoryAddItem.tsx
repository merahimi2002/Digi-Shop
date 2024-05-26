import { useGetCategoryItem } from "../Category/UseGetCategory";
import AddLoveQuantity from "../Services/AddLoveQuantity";
import AddProductQuantity from "../Services/AddProductQuantity";

const CategoryAddItem = (Category: string) => {
  const { CategoriesItem, CategoriesItemError, CategoriesItemLoading } =
    useGetCategoryItem(Category);
  const { QuantityLove, LoveID } = AddLoveQuantity();
  const { ProductQuantity, ProductName } = AddProductQuantity();

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

  // set product quantity Value
  CategoriesItem?.map((i) => {
    if (i.title === ProductName) {
      i.ProductQuantity = ProductQuantity;
    }
  });

  return { CategoriesItem, CategoriesItemError, CategoriesItemLoading };
};

export default CategoryAddItem;
