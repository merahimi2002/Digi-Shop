import { Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react";
import { TextSummarizer } from "../services/TextSummarizer";

interface ProductsCardProps {
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard = ({
  image,
  title,
  description,
  price,
}: ProductsCardProps) => {
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
      </CardBody>
    </Card>
  );
};

export default ProductCard;
