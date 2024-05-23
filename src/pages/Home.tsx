import { Fragment } from "react/jsx-runtime";
import { Button, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import { List, ListIcon, ListItem, Center } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import CarouselSlider from "../component/CarouselSlider";
import Slider01 from "../../public/image/Slider/Slider01.png";
import Slider02 from "../../public/image/Slider/Slider02.png";
import Slider03 from "../../public/image/Slider/Slider03.png";
import Picture from "../../public/image/Sidepage/About.jpg";

const Home = () => {
  return (
    <Fragment>
      <Center mt="100px" pb="30px" bgGradient="linear(to-b, #f2f6f9, #008080)">
        <CarouselSlider
          Count={3}
          Slider={[Slider01, Slider02, Slider03]}
        />
      </Center>
      <Grid
        templateColumns="repeat(12, 1fr)"
        mt="50px"
        gap={5}
        p={{ base: "10px", md: "10px 80px" }}
      >
        <GridItem colSpan={{ base: 12, md: 8, xl: 5 }}>
          <Image boxShadow="base" borderRadius={4} src={Picture}></Image>
        </GridItem>
        <GridItem
          pl={{ base: "10px", md: "40px" }}
          colSpan={{ base: 12, md: 8, xl: 6 }}
        >
          <Text textStyle="SpecialTitr">About Digi Shop</Text>
          <Text textStyle="p" mb={3}>
            Welcome to Digi Shop, your premier destination for high-quality
            digital products and services. At Digi Shop, we strive to provide
            customers with an unparalleled shopping experience, offering a
            diverse range of digital goods to meet a variety of needs and
            interests.
          </Text>
          <Text textStyle="p">
            At Digi Shop, you'll find an extensive selection of digital products
            and services carefully curated to cater to diverse preferences and
            requirements. Whether you're seeking cutting-edge software,
            captivating e-books, captivating music and videos, stunning
            graphics, or enriching online courses, we've got you covered.
          </Text>
          <List spacing={3} my={5} fontWeight="500">
            <ListItem>
              <ListIcon
                color="FirstColor"
                fontSize="20px"
                as={FaCheckCircle}
              ></ListIcon>
              Quality Assurance
            </ListItem>
            <ListItem>
              <ListIcon
                color="FirstColor"
                fontSize="20px"
                as={FaCheckCircle}
              ></ListIcon>
              User-Friendly Experience
            </ListItem>
            <ListItem>
              <ListIcon
                color="FirstColor"
                fontSize="20px"
                as={FaCheckCircle}
              ></ListIcon>
              Secure Transactions
            </ListItem>
            <ListItem>
              <ListIcon
                color="FirstColor"
                fontSize="20px"
                as={FaCheckCircle}
              ></ListIcon>
              Exceptional Customer Service
            </ListItem>
            <Button variant="ReadMore">
              <a href="Digi-Shop/about" className="a-Readmore">
                Read more <Icon mx="10px" pt="5px" as={FaArrowRightLong}></Icon>
              </a>
            </Button>
          </List>
        </GridItem>
      </Grid>
    </Fragment>
  );
};

export default Home;
