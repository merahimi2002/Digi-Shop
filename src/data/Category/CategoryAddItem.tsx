import { useGetCategoryItem } from "../Category/UseGetCategory";

const CategoryAddItem = (Category: string) => {
  const { CategoriesItem, CategoriesItemError, CategoriesItemLoading } =
    useGetCategoryItem(Category);

  //set love quantity & Product Quantity default to 0
  CategoriesItem?.map((index) => {
    if (index.LoveQuantity == null) {
      index.LoveQuantity = 0;
      index.ProductQuantity = 0;
    }
  });

  // set product quantity Value in local storage
  CategoriesItem?.map((i) => {
    const DefaultLoveQuantity = 0;
    // set defualt value to zero
    if (localStorage.getItem(i.id.toString()) === null) {
      localStorage.setItem(i.id.toString(), DefaultLoveQuantity.toString());
    }
    // set Value
    i.LoveQuantity = Number(localStorage.getItem(i.id.toString()));
  });

  // set product quantity Value in local storage
  CategoriesItem?.map((i) => {
    const DefaultProductQuantity = 0;
    // set defualt value to zero
    if (localStorage.getItem(i.title) === null) {
      localStorage.setItem(i.title, DefaultProductQuantity.toString());
    }
    // set Value
    i.ProductQuantity = Number(localStorage.getItem(i.title));
  });

  return { CategoriesItem, CategoriesItemError, CategoriesItemLoading };
};

export default CategoryAddItem;
