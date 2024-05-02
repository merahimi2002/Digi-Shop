import { Grid, GridItem } from "@chakra-ui/react";
import useProductsList from "../data/Product/UseGetProduct";
import ProductAddItem from "../data/Product/ProductAddItem";
import ProductCardSkeletons from "../component/Product/ProductCardSkeletons";
import ProductCard from "../component/Product/ProductCard";

const Product = () => {
  const { error, isLoading } = useProductsList();
  const data = ProductAddItem();

  // skeletons
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (isLoading)
    return (
      <Grid templateColumns="repeat(12, 1fr)" gap={5} p={5}>
        {Skeletons.map((pro) => (
          <GridItem colSpan={{ base: 12, md: 6, lg: 4, "2xl": 3 }}>
            <ProductCardSkeletons key={pro} />
          </GridItem>
        ))}
      </Grid>
    );
  if (error) return <h1>{error.message}</h1>;

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      gap={8}
      p={5}
      mt="150px"
      padding={{ base: "10px", md: "10px 80px" }}
    >
      {data?.map((pro) => (
        <GridItem colSpan={{ base: 12, md: 6, lg: 4, "2xl": 3 }}>
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

export default Product;
