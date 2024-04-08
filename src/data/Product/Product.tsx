import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import useProducts from "./UseProduct";
import ProductCard from "../../component/ProductCard";

const Product = () => {
  const { data, error, isLoading } = useProducts();

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  if (error) return <h1>{error.message}</h1>;

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={5} p={5}>
      {data?.map((pro) => (
        <GridItem colSpan={{ base: 12, md: 6, lg: 4, "2xl": 3 }}>
          <ProductCard
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

export default Product;
