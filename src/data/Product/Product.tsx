import { List, ListItem, Spinner } from "@chakra-ui/react";
import useProducts from "./UseProduct";

const Product = () => {
  const { data: products, error, isLoading } = useProducts();

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
    <List>
      {products?.map((pro) => (
        <ListItem key={pro.id}>{pro.title}</ListItem>
      ))}
    </List>
  );
};

export default Product;
