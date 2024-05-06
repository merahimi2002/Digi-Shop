import { useState } from "react";
import { Button, Grid, GridItem, Spinner } from "@chakra-ui/react";
import ProductAddItem from "../../data/Product/ProductAddItem";
import CategoryProductAddItem from "../../data/Product/CategoryProductAddItem";
import { useGetCategory } from "../../data/Product/UseGetCategory";
import ProductCardSkeletons from "./ProductCardSkeletons";
import ProductCard from "./ProductCard";

const Product = () => {
  //Product
  const { data, error, isLoading } = ProductAddItem(20);

  //Product skeletons
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  //Product Loading
  if (isLoading)
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
  if (error) return <h1>{error.message}</h1>;

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

  //category Filter
  const [Category, setCategory] = useState<string>("all");

  //Category item
  const { CategoriesItem, CategoriesItemError, CategoriesItemLoading } =
    CategoryProductAddItem(Category);

  //Category item Loading
  if (CategoriesItemLoading)
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

  //Categories Error
  if (CategoriesItemError) return <h1>Error CategoriesItem</h1>;


  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={5}>
      <GridItem colSpan={1}>
        {Categories?.map((pro: string) => (
          <Button
            w="100%"
            mt={5}
            borderRadius={0}
            p={8}
            fontSize="18px"
            color="FirstColor"
            border="2px solid FirstColor"
            onClick={() => setCategory(pro)}
            boxShadow="base"
          >
            {pro}
          </Button>
        ))}
      </GridItem>
      <GridItem colSpan={4}>
        <Grid templateColumns="repeat(12, 1fr)" gap={8} p={5}>
          {data?.map((pro) =>
            Category === "all" ? (
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
            ) : null
          )}
          {CategoriesItem?.map((pro) =>
            pro.category === Category ? (
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
            ) : null
          )}
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Product;
