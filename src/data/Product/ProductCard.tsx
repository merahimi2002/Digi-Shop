import { Box, Button, Card, CardBody, CardHeader, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { TextSummarizer } from "../../services/TextSummarizer";
import useLoveProduct from "./useLoveProduct";

interface ProductsCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard = ({
  id,
  image,
  title,
  description,
  price,
}: ProductsCardProps) => {

  const { count, increase, decrease } = useLoveProduct()

  return (
    <Card boxShadow='base'>
      <CardHeader p={5}>
        <Image w="100%" h="300px" objectFit="cover" src={image}></Image>
      </CardHeader>
      <CardBody bg="SecondColor">
        <Text textStyle="TitrColorFul" mb={4} lineHeight={1.5} minH={20}>
          <TextSummarizer text={title} maxChars={30} />
        </Text>
        <Text minH={20}>
          <TextSummarizer text={description} maxChars={100} />
        </Text>
        <Text textAlign="right" textStyle="Price">${price}</Text>
        <Flex align="center" justifyContent="center">
          <Box>
            {count === 0 ? (
              <Button variant="Shop" onClick={increase}>
                <Icon textStyle="Icon" color="FirstColor" as={FaRegHeart}></Icon>
              </Button  >
            ) : (
              <Button variant="Shop" onClick={decrease}>
                <Icon textStyle="Icon" color="FirstColor" as={FaHeart}></Icon>
              </Button  >
            )}

            <Button variant="Shop">
              <Icon textStyle="Icon" color="FirstColor" as={FaShoppingCart}></Icon>
            </Button>
            <Button variant="Shop">
              <Icon textStyle="Icon" color="FirstColor" as={FaSearchPlus}></Icon>
            </Button>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
