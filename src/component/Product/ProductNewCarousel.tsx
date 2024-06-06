import { Box, Flex, Text } from "@chakra-ui/react";
import useGetProduct from "../../data/useGetProducts";
import ProductCardSkeletons from "./ProductCardSkeletons";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ProductNewCarousel = () => {
  //Product
  const { Product, ProductError, ProductLoading } = useGetProduct("");
  //   5 last Product
  const NEWProduct = Product?.slice(Math.max(Product.length - 5, 0));

  //Product Loading
  if (ProductLoading)
    return (
      <Flex w="100%">
        <Box p={5} w={{ base: "100%", md: "50%", xl: "33%", "2xl": "25%" }}>
          <ProductCardSkeletons />
        </Box>
        <Box p={5} w={{ base: "0%", md: "50%", xl: "33%", "2xl": "25%" }}>
          <ProductCardSkeletons />
        </Box>
        <Box p={5} w={{ base: "0%", md: "0%", xl: "33%", "2xl": "25%" }}>
          <ProductCardSkeletons />
        </Box>
        <Box p={5} w={{ base: "0%", md: "0%", xl: "0%", "2xl": "25%" }}>
          <ProductCardSkeletons />
        </Box>
      </Flex>
    );

  //Product Error
  if (ProductError)
    return <Text textStyle="ErrorElement">{ProductError.message}</Text>;

  // Carousel
  const responsiveCarousel = {
    tv: {
      breakpoint: { max: 3000, min: 1600 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1600, min: 1200 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsiveCarousel}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      transitionDuration={400}
    >
      {NEWProduct?.map((pro) => (
        <Box p={5} key={pro.id}>
          <ProductCard
            id={pro.id}
            title={pro.title}
            price={pro.price}
            description={pro.description}
            image={pro.image}
            rate={pro.rating.rate}
          />
        </Box>
      ))}
    </Carousel>
  );
};
