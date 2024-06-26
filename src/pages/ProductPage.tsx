import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import Category from "../component/Category/Category";

const ProductPage = () => {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      mt="150px"
      padding={{ base: "10px", md: "10px 80px" }}
      gap={5}
    >
      <GridItem colSpan={{ base: 5, md: 2, lg: 1 }}>
        <Category />
      </GridItem>
      <GridItem colSpan={{ base: 5, md: 3, lg: 4 }}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default ProductPage;
