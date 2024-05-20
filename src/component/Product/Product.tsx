import { Grid, GridItem } from "@chakra-ui/react";
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
      <Grid templateColumns="repeat(5, 1fr)" gap={5}>
        <GridItem colSpan={1}></GridItem>
        <GridItem colSpan={4}>
          <Grid templateColumns="repeat(12, 1fr)" gap={5} p={5}>
            {Skeletons.map((pro) => (
              <GridItem colSpan={{ base: 12, md: 12, lg: 6, "2xl": 4 }}>
                <ProductCardSkeletons key={pro} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    );

  //Product Error
  if (ProductError) return <h1>{ProductError.message}</h1>;
  return Product?.map((pro) => (
    <GridItem colSpan={{ base: 12, md: 12, lg: 6, "2xl": 4 }}>
      <ProductCard
        id={pro.id}
        title={pro.title}
        price={pro.price}
        description={pro.description}
        image={pro.image}
        LoveQuantity={pro.LoveQuantity}
      />
    </GridItem>
  ));
};

export default Product;