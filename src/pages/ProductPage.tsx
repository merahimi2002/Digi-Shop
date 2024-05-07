import { Grid, GridItem } from "@chakra-ui/react";
import Category from "../component/Product/Category";

const ProductPage = () => {
  return (
    <Grid
      templateColumns="repeat(1, 1fr)"
      mt="150px"
      padding={{ base: "10px", md: "10px 80px" }}
      gap={5}
    >
      <GridItem colSpan={1}>
        <Category />
      </GridItem>
    </Grid>
  );
};

export default ProductPage;
