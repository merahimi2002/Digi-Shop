import { Grid, GridItem, Text } from "@chakra-ui/react";
import ProductAddItem from "../../data/Product/ProductAddItem";
import ProductCardSkeletons from "./ProductCardSkeletons";
import ProductCard from "./ProductCard";

const Product = () => {
  //Product
  const { Product, ProductError, ProductLoading } = ProductAddItem(20);

  //Product skeletons
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  //Product Loading
  if (ProductLoading)
    return (
      <Grid templateColumns="repeat(12, 1fr)" gap={5} p={5}>
        {Skeletons.map((pro) => (
          <GridItem colSpan={{ base: 12, md: 12, lg: 6, "2xl": 4 }} key={pro}>
            <ProductCardSkeletons />
          </GridItem>
        ))}
      </Grid>
    );

  //Product Error
  if (ProductError)
    return <Text textStyle="ErrorElement">{ProductError.message}</Text>;

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={8} p={5}>
      {Product?.map((pro) => (
        <GridItem colSpan={{ base: 12, md: 12, lg: 6, "2xl": 4 }} key={pro.id}>
          <ProductCard
            id={pro.id}
            title={pro.title}
            price={pro.price}
            description={pro.description}
            image={pro.image}
            LoveQuantity={pro.LoveQuantity}
            ProductQuantity={pro.ProductQuantity}
          />
        </GridItem>
      ))}
      ;
    </Grid>
  );
};

export default Product;
