import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import { ProductQuantityStore } from "../../data/ProductQuantityStore";
import { TextSummarizer } from "../../services/TextSummarizer";
import { formatCurrency } from "../../services/formatCurrency";

interface ProductCartProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductFavoriteCart = ({ image, title, price, id }: ProductCartProps) => {
  const { ProductState, DeleteProductQuantity } = ProductQuantityStore();
  return (
    <Flex p={5} my={3} boxShadow="base" justifyContent="space-around">
      <Image w="100px" h="100px" pr={5} objectFit="contain" src={image}></Image>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Text textStyle="TitrColorFul" fontSize="20px" mb={4}>
          <TextSummarizer text={title} maxChars={15} />
        </Text>
        <Text fontSize="18px">{formatCurrency(price)}</Text>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Text textStyle="Price" fontSize="20px" mr={2}>
            {ProductState[id].ProductQuantity}
          </Text>
          <Text fontSize="18px">items</Text>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Button
          color="red.500"
          background="none"
          _hover="bg:none"
          _active="bg:none"
          onClick={() => DeleteProductQuantity(id)}
        >
          <Icon
            fontSize="30px"
            as={IoClose}
            borderRadius="50%"
            transition="0.4s"
            p="2px"
            _hover={{ bg: "red.500", color: "white" }}
          ></Icon>
        </Button>
        <Text textStyle="Price" color="FirstColor" fontSize="20px" m={0}>
          {formatCurrency(price * ProductState[id].ProductQuantity)}
        </Text>
      </Box>
    </Flex>
  );
};

export default ProductFavoriteCart;
