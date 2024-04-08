import { Fragment } from "react/jsx-runtime";
import { Box } from "@chakra-ui/react";
import Product from "../data/Product/Product";

const AboutUs = () => {
  return (
    <Fragment>
      <Box mt="120px" p={{ base: "10px", md: "10px 80px" }}>
        <Product />
      </Box>
    </Fragment>
  );
};

export default AboutUs;
