import { Flex, Icon } from "@chakra-ui/react";
import { FaStar, FaRegStar } from "react-icons/fa";

const ratingFunction = (rate: number) => {
  const rounded = Math.round(rate);
  switch (rounded) {
    case 1:
      return (
        <Flex>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaRegStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaRegStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaRegStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaRegStar}></Icon>
        </Flex>
      );
    case 2:
      return (
        <Flex>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaRegStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaRegStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaRegStar}></Icon>
        </Flex>
      );
    case 3:
      return (
        <Flex>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaRegStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaRegStar}></Icon>
        </Flex>
      );
    case 4:
      return (
        <Flex>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaRegStar}></Icon>
        </Flex>
      );
    case 5:
      return (
        <Flex>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
          <Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>
        </Flex>
      );
  }
};

export default ratingFunction;
