import { Link } from "react-router-dom";
import { Button, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { useGetCategory } from "../../data/Category/UseGetCategory";

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
  if (CategoriesError) return <h1>{CategoriesError.message}</h1>;

  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={5}>
      <GridItem colSpan={1}>
        {Categories?.map((pro: string) => (
          <Button
            onClick={() => window.location.reload()}
            w="100%"
            h="70px"
            mt={5}
            p={0}
            borderRadius={0}
            fontSize="18px"
            color="FirstColor"
            border="2px solid FirstColor"
            boxShadow="base"
            key={pro}
          >
            <Link to={`${pro}`} className="a-link">{pro}</Link>
          </Button>
        ))}
      </GridItem>
    </Grid>
  );
};

export default Category;
