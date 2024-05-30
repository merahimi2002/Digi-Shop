import { useParams } from "react-router-dom";
import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import {useGetCategoryItem } from "../../data/useGetCategories";
import ProductCardSkeletons from "../Product/ProductCardSkeletons";
import ProductCard from "../Product/ProductCard";
import Error from "../../../public/image/404.png";


const CategoriyItem = () => {
  const params = useParams();

  //Category item
  let UrlCategory = "";
  if (params.category !== undefined) {
    UrlCategory = params.category;
  }
  const { CategoriesItem, CategoriesItemError, CategoriesItemLoading } =
    useGetCategoryItem(UrlCategory);

  //Category item skeletons
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  //Category item Loading
  if (CategoriesItemLoading)
    return (
      <Grid templateColumns="repeat(12, 1fr)" gap={5} p={5}>
        {Skeletons.map((pro) => (
          <GridItem colSpan={{ base: 12, md: 12, lg: 6, "2xl": 4 }} key={pro}>
            <ProductCardSkeletons />
          </GridItem>
        ))}
      </Grid>
    );

  //Categories Error
  if (CategoriesItemError)
    return <Text textStyle="ErrorElement">{CategoriesItemError.message}</Text>;

  // valid url
  if (CategoriesItem?.length == 0) {
    return <Image src={Error} />;
  }

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={8} p={5}>
      {CategoriesItem?.map((pro) => (
        <GridItem colSpan={{ base: 12, md: 12, lg: 6, "2xl": 4 }} key={pro.id}>
          <ProductCard
            id={pro.id}
            title={pro.title}
            price={pro.price}
            description={pro.description}
            image={pro.image}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default CategoriyItem;
