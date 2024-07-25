import { Link, NavLink } from "react-router-dom";
import { Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import logo from "../../public/image/Logo.png";
import { ArrowRightIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      gap={5}
      p={{ base: "10px", md: "30px 80px" }}
      bg="SecondColorDM"
      color="black"
      mt={10}
    >
      <GridItem colSpan={[12, 3]}>
        <NavLink to="/">
          <Image src={logo} w={170} mb={5}></Image>
        </NavLink>
        <Text color="black">
          <strong color="red">Digi Shop </strong>
          Offer a diverse range of digital products and services to cater to
          different customer needs.
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
          <ListItem
            fontSize="18px"
            display="flex"
            alignItems="center"
            as={motion.div}
            whileHover={{ translate: "10px" }}
          >
            <ListIcon
              fontSize="14px"
              as={ArrowRightIcon}
              color="FirstColor"
            ></ListIcon>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem
            fontSize="18px"
            display="flex"
            alignItems="center"
            as={motion.div}
            whileHover={{ translate: "10px" }}
          >
            <ListIcon
              fontSize="14px"
              as={ArrowRightIcon}
              color="FirstColor"
            ></ListIcon>
            <NavLink to="/about">About Us</NavLink>
          </ListItem>
          <ListItem
            fontSize="18px"
            display="flex"
            alignItems="center"
            as={motion.div}
            whileHover={{ translate: "10px" }}
          >
            <ListIcon
              fontSize="14px"
              as={ArrowRightIcon}
              color="FirstColor"
            ></ListIcon>
            <NavLink to="/contact">Contact Us</NavLink>
          </ListItem>
          <ListItem
            fontSize="18px"
            display="flex"
            alignItems="center"
            as={motion.div}
            whileHover={{ translate: "10px" }}
          >
            <ListIcon
              fontSize="14px"
              as={ArrowRightIcon}
              color="FirstColor"
            ></ListIcon>
            <NavLink to="/product">Product</NavLink>
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
          <ListItem
            fontSize="18px"
            display="flex"
            alignItems="center"
            as={motion.div}
            whileHover={{ translate: "10px" }}
          >
            <ListIcon
              fontSize="14px"
              as={PhoneIcon}
              color="FirstColor"
            ></ListIcon>
            <Link to="tel:+982177123456">021-77123456</Link>
          </ListItem>
          <ListItem
            fontSize="18px"
            display="flex"
            alignItems="center"
            as={motion.div}
            whileHover={{ translate: "10px" }}
          >
            <ListIcon
              fontSize="14px"
              as={PhoneIcon}
              color="FirstColor"
            ></ListIcon>
            <Link to="tel:+982177123456">021-77123456</Link>
          </ListItem>
          <ListItem
            fontSize="18px"
            display="flex"
            alignItems="center"
            as={motion.div}
            whileHover={{ translate: "10px" }}
          >
            <ListIcon
              fontSize="14px"
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
