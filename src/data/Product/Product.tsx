import { Grid, GridItem } from "@chakra-ui/react";
import useProducts from "./UseGetProduct";
import ProductCard from "./ProductCard";
import ProductCardSkeletons from "./ProductCardSkeletons";
import useLoveProduct from "./useLoveProduct";

const Product = () => {
  const { data, error, isLoading } = useProducts();
  const { QuantityLove, LoveID } = useLoveProduct();

  // add Attribute
  //set the default to 0

  data?.map((index) => {
    if (index.LoveQuantity == null) {
      index.LoveQuantity = 0;
    }
  });

  data?.map((i) => {
    if (i.id === LoveID) {
      i.LoveQuantity = QuantityLove;
    }
  });

  console.log(LoveID);
  console.log(data);

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
    <Grid templateColumns="repeat(12, 1fr)" gap={5} p={5}>
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
