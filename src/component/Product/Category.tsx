import { Link } from "react-router-dom";
import { Button, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { useGetCategory } from "../../data/Product/UseGetCategory";


const Category = () => {
  //Categories
  const { Categories, CategoriesError, CategoriesLoading } = useGetCategory();

  // Categories Loading
  if (CategoriesLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  //Categories Error
  if (CategoriesError) return <h1>Error Category</h1>;

  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={5}>
      <GridItem colSpan={1}>
        {Categories?.map((pro: string) => (
          <Link to={`${pro}`}>
            <Button
            w="100%"
            mt={5}
            borderRadius={0}
            p={8}
            fontSize="18px"
            color="FirstColor"
            border="2px solid FirstColor"
            boxShadow="base"
          >
            {pro}
          </Button>
          </Link>
        ))}
      </GridItem>
    </Grid>
  );
};

export default Category;
