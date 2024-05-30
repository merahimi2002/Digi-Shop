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
  const { DecreaseLoveQuantity } = ProductQuantityStore();
  return (
    <Flex p={5} my={3} boxShadow="base" justifyContent="space-around">
      <Image w="100px" h="100px" pr={5} objectFit="contain" src={image}></Image>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Text textStyle="TitrColorFul" fontSize="20px">
          <TextSummarizer text={title} maxChars={15} />
        </Text>
        <Text textStyle="Price" fontSize="20px">
          {formatCurrency(price)}
        </Text>
      </Box>
      <Button
        color="red.500"
        background="none"
        _hover="bg:none"
        _active="bg:none"
        onClick={() => DecreaseLoveQuantity(id)}
      >
        <Icon
          fontSize="30px"
          as={IoClose}
          borderRadius="50%"
          transition="0.4s"
          p="2px"
          _hover={{ bg: "red.500" , color:"white" }}
        ></Icon>
      </Button>
    </Flex>
  );
};

export default ProductFavoriteCart;
