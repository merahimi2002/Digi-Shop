import { Icon } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function roundByNum(num: number, rounder: number) {
  var multiplier = 1 / (rounder || 0.5);
  return Math.round(num * multiplier) / multiplier;
}

const ratingFunction = (rate: number) => {
  const FloatNum = roundByNum(rate, 0.5);
  let IntegerNum = Math.floor(rate);
  const Result = [];
  // have 1 rataing
  for (var i = 0; i < IntegerNum; i++) {
    Result.push(<Icon fontSize="25px" color="#ffc107" as={FaStar}></Icon>);
  }
  // have 0.5 rataing
  if (FloatNum !== IntegerNum) {
    Result.push(
      <Icon fontSize="25px" color="#ffc107" as={FaStarHalfAlt}></Icon>
    );
    IntegerNum = IntegerNum + 1;
  }
  // have 0 rataing
  for (var i = IntegerNum; i < 5; i++) {
    Result.push(<Icon fontSize="25px" color="#ffc107" as={FaRegStar}></Icon>);
  }
  return Result;
};
export default ratingFunction;
