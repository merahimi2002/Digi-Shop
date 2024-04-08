import { Fragment } from "react/jsx-runtime";
import {
  Center,
  Grid,
  GridItem,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FaCheckCircle, FaBusinessTime } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import Picture from "../../public/image/About.jpg";

const AboutUs = () => {
  return (
    <Fragment>
      <Grid
        templateColumns="repeat(12, 1fr)"
        mt="130px"
        gap={5}
        p={{ base: "10px", md: "10px 80px" }}
      >
        <GridItem colSpan={{ base: 12, md: 5 }}>
          <Image boxShadow="dark-lg" borderRadius={4} src={Picture}></Image>
        </GridItem>
        <GridItem
          pl={{ base: "10px", md: "40px" }}
          colSpan={{ base: 12, md: 6 }}
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
          </List>
        </GridItem>
      </Grid>
      <Grid
        templateColumns="repeat(12, 1fr)"
        mb="100px"
        gap={5}
        p={{ base: "10px", md: "10px 80px" }}
      >
        <GridItem colSpan={12} mt={5}>
          <Center h="100%">
            <Text textStyle="SpecialTitr">Our Mission</Text>
          </Center>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }} px={5}>
          <Center
            h="100%"
            display="flex"
            flexDirection="column"
            boxShadow="2xl"
            p={5}
            rounded="md"
            _hover={{ background: "SecondColor" }}
            transition="0.4s"
          >
            <Icon
              fontSize="50px"
              color="FirstColor"
              as={FaBusinessTime}
              mb={5}
            ></Icon>
            <Text textAlign="center">
              to empower individuals and businesses with innovative digital
              solutions that enhance their lives and drive success
            </Text>
          </Center>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }} px={5}>
          <Center
            h="100%"
            display="flex"
            flexDirection="column"
            boxShadow="2xl"
            p={5}
            rounded="md"
            _hover={{ background: "SecondColor" }}
            transition="0.4s"
          >
            <Icon
              fontSize="50px"
              color="FirstColor"
              as={RiCustomerService2Line}
              mb={5}
            ></Icon>
            <Text textAlign="center">
              We are committed to delivering exceptional value, reliability, and
              convenience to our customers
            </Text>
          </Center>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }} px={5}>
          <Center
            h="100%"
            display="flex"
            flexDirection="column"
            boxShadow="2xl"
            p={5}
            rounded="md"
            _hover={{ background: "SecondColor" }}
            transition="0.4s"
          >
            <Icon
              fontSize="50px"
              color="FirstColor"
              as={MdMiscellaneousServices}
              mb={5}
            ></Icon>
            <Text textAlign="center">
              you'll find an extensive selection of digital products and
              services carefully curated to cater to diverse preferences and
              requirements
            </Text>
          </Center>
        </GridItem>
      </Grid>
    </Fragment>
  );
};

export default AboutUs;
