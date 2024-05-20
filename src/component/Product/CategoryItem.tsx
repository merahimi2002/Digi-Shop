import { Grid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CategoryAddItem from "../../data/Product/CategoryAddItem";
import ProductCardSkeletons from "./ProductCardSkeletons";
import Product from "./Product";
import ProductCard from "./ProductCard";


const CategoriyItem = () => {
  const params = useParams();

  //Category item
  let UrlCategory = "";
  if (params.category !== undefined) {
    UrlCategory = params.category;
  }
  const { CategoriesItem, CategoriesItemError, CategoriesItemLoading } =
    CategoryAddItem(UrlCategory);

  //Category item skeletons
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

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
    <Grid templateColumns="repeat(1, 1fr)" gap={5}>
      <GridItem colSpan={1}>
        <Grid templateColumns="repeat(12, 1fr)" gap={8} p={5}>
          {CategoriesItem?.map((pro) => (
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
          ))}
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default CategoriyItem;
