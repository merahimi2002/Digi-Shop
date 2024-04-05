import { Link, NavLink } from "react-router-dom";
import {
  Text,
  Grid,
  GridItem,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import logo from "../../public/image/Logo.png";
import { ArrowRightIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      gap={5}
      p={{ base: "10px", md: "30px 80px" }}
      bg="SecondColor"
      color="black"
      mt={5}
    >
      <GridItem colSpan={[12, 3]}>
        <NavLink to="/Digi-Shop">
          <Image src={logo} w={200} mb={5}></Image>
        </NavLink>
        <Text color="black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ex
          quia molestias dignissimos ipsum
        </Text>
      </GridItem>
      <GridItem colSpan={[0, 2]}></GridItem>
      <GridItem colSpan={[12, 4]}>
        <Text textStyle="Titr" display="flex">
          Useful
          <Text textStyle="TitrColorFul" pl={2} m={0}>
            Links
          </Text>
        </Text>
        <List spacing={3}>
          <ListItem fontSize="20px" display="flex" alignItems="center">
            <ListIcon
              fontSize="16px"
              as={ArrowRightIcon}
              color="FirstColor"
            ></ListIcon>
            <NavLink to="/Digi-Shop">Home</NavLink>
          </ListItem>
          <ListItem fontSize="20px" display="flex" alignItems="center">
            <ListIcon
              fontSize="16px"
              as={ArrowRightIcon}
              color="FirstColor"
            ></ListIcon>
            <NavLink to="/Digi-Shop/about">About Us</NavLink>
          </ListItem>
          <ListItem fontSize="20px" display="flex" alignItems="center">
            <ListIcon
              fontSize="16px"
              as={ArrowRightIcon}
              color="FirstColor"
            ></ListIcon>
            <NavLink to="/Digi-Shop/contact">Contact Us</NavLink>
          </ListItem>
          <ListItem fontSize="20px" display="flex" alignItems="center">
            <ListIcon
              fontSize="16px"
              as={ArrowRightIcon}
              color="FirstColor"
            ></ListIcon>
            <NavLink to="/Digi-Shop/product">Product</NavLink>
          </ListItem>
        </List>
      </GridItem>
      <GridItem colSpan={[12, 3]}>
        <Text textStyle="Titr" display="flex">
          Contact
          <Text textStyle="TitrColorFul" pl={2} m={0}>
            Info
          </Text>
        </Text>
        <List spacing={3}>
          <ListItem fontSize="20px" display="flex" alignItems="center">
            <ListIcon
              fontSize="16px"
              as={PhoneIcon}
              color="FirstColor"
            ></ListIcon>
            <Link to="tel:+982177123456">021-77123456</Link>
          </ListItem>
          <ListItem fontSize="20px" display="flex" alignItems="center">
            <ListIcon
              fontSize="16px"
              as={PhoneIcon}
              color="FirstColor"
            ></ListIcon>
            <Link to="tel:+982177123456">021-77123456</Link>
          </ListItem>
          <ListItem fontSize="20px" display="flex" alignItems="center">
            <ListIcon
              fontSize="20px"
              as={EmailIcon}
              color="FirstColor"
            ></ListIcon>
            <Link to="mailto:example@support.com">example@support.com</Link>
          </ListItem>
        </List>
      </GridItem>
    </Grid>
  );
};

export default Footer;
