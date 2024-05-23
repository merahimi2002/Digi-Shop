import { useGetCategoryItem } from "../Category/UseGetCategory";
import useLoveProduct from "../Product/AddLoveQuantity";

const CategoryAddItem = (Category: string) => {
  const { CategoriesItem, CategoriesItemError, CategoriesItemLoading } =
    useGetCategoryItem(Category);
  const { QuantityLove, LoveID } = useLoveProduct();

  //set love quantity default to 0
  CategoriesItem?.map((index) => {
    if (index.LoveQuantity == null) {
      index.LoveQuantity = 0;
    }
  });

  //set love quantity Value
  CategoriesItem?.map((i) => {
    if (i.id === LoveID) {
      i.LoveQuantity = QuantityLove;
    }
  });

   //Save in local storage
   localStorage.setItem(LoveID.toString(), QuantityLove.toString());

   // set love quantity valu from local storage
   CategoriesItem?.map((i) => {
     if(localStorage.getItem(i.id.toString())!== null){
       i.LoveQuantity = Number(localStorage.getItem(i.id.toString()))
     }
   });

  return { CategoriesItem, CategoriesItemError, CategoriesItemLoading };
};

export default CategoryAddItem;
