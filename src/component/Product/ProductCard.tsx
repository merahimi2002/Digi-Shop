import { Box, Button, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { TextSummarizer } from "../../services/TextSummarizer";
import { formatCurrency } from "../../services/formatCurrency";
import { ProductQuantityStore } from "../../data/ProductQuantityStore";
import ratingFunction from "../../services/ratingFunction";

interface ProductsCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rate: number;
}

const ProductCard = ({
  id,
  image,
  title,
  description,
  price,
  rate,
}: ProductsCardProps) => {
  const {
    ProductState,
    IncreaseLoveQuantity,
    DecreaseLoveQuantity,
    IncreaseProductQuantity,
    DecreaseProductQuantity,
  } = ProductQuantityStore();
  return (
    <Card boxShadow="base">
      <CardHeader p={5}>
        <Image w="100%" h="250px" objectFit="contain" src={image}></Image>
      </CardHeader>
      <CardBody bg="SecondColor">
        <Text textStyle="TitrColorFul" mb={4} lineHeight={1.5}>
          <TextSummarizer text={title} maxChars={20} />
        </Text>
        <Text minH={18}>
          <TextSummarizer text={description} maxChars={70} />
        </Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex>{ratingFunction(rate)}</Flex>
          <Text textAlign="right" textStyle="Price">
            {formatCurrency(price)}
          </Text>
        </Flex>
        <Flex align="center" justifyContent="center" mt={6}>
          <Box display="flex">
            {ProductState[id].LoveQuantity === 0 ? (
              <Button variant="Shop" onClick={() => IncreaseLoveQuantity(id)}>
                <Icon
                  textStyle="Icon"
                  color="FirstColor"
                  as={FaRegHeart}
                ></Icon>
              </Button>
            ) : (
              <Button variant="Shop" onClick={() => DecreaseLoveQuantity(id)}>
                <Icon textStyle="Icon" color="FirstColor" as={FaHeart}></Icon>
              </Button>
            )}
            {ProductState[id].ProductQuantity === 0 ? (
              <Button
                variant="Shop"
                onClick={() => IncreaseProductQuantity(id)}
              >
                <Icon
                  textStyle="Icon"
                  color="FirstColor"
                  as={FaShoppingCart}
                ></Icon>
              </Button>
            ) : (
              <Box display="flex" alignItems="center">
                <Button
                  variant="Shop"
                  onClick={() => DecreaseProductQuantity(id)}
                >
                  <Box fontSize="28px" mt="-5px" color="red">
                    -
                  </Box>
                </Button>
                <Box fontSize="20px">{ProductState[id].ProductQuantity}</Box>
                <Button
                  variant="Shop"
                  onClick={() => IncreaseProductQuantity(id)}
                >
                  <Box fontSize="28px" mt="-5px" color="green">
                    +
                  </Box>
                </Button>
              </Box>
            )}

            <Button variant="Shop">
              <Icon
                textStyle="Icon"
                color="FirstColor"
                as={FaSearchPlus}
              ></Icon>
            </Button>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
