import { useState } from "react";
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { TextSummarizer } from "../../services/TextSummarizer";
import { IoMdClose } from "react-icons/io";
import { formatCurrency } from "../../services/formatCurrency";
import { DecreaseLoveQuantity } from "../../data/Services/AddLoveQuantity";

interface ProductCartProps {
  id: number;
  title: string;
  price: number;
  image: string;
  LoveQuantity: number;
}

export const ProductCart = ({
  image,
  title,
  price,
  id,
  LoveQuantity,
}: ProductCartProps) => {
  const [LoveQuantityRender, setLoveQuantityRender] = useState(LoveQuantity);

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
        onClick={() => setLoveQuantityRender(DecreaseLoveQuantity(id))}
      >
        <Icon fontSize="30px" as={IoMdClose}></Icon>
      </Button>
    </Flex>
  );
};
