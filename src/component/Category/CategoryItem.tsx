import { useParams } from "react-router-dom";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import CategoryAddItem from "../../data/Category/CategoryAddItem";
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
    CategoryAddItem(UrlCategory);

  //Category item skeletons
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  //Category item Loading
  if (CategoriesItemLoading)
    return (
      <Grid templateColumns="repeat(12, 1fr)" gap={5} p={5}>
        {Skeletons.map((pro) => (
          <GridItem colSpan={{ base: 12, md: 12, lg: 6, "2xl": 4 }}>
            <ProductCardSkeletons key={pro} />
          </GridItem>
        ))}
      </Grid>
    );

  //Categories Error
  if (CategoriesItemError) return <h1>Error CategoriesItem</h1>;

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
            LoveQuantity={pro.LoveQuantity}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default CategoriyItem;