import { Link } from "react-router-dom";
import { Center, Grid, GridItem, Icon } from "@chakra-ui/react";
import { Text, List, ListItem } from "@chakra-ui/react";
import { IoLocation } from "react-icons/io5";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      mt="150px"
      gap={{ base: 5, xl: 10 }}
      p={{ base: "10px", md: "10px 80px", "2xl": "10px 250px" }}
      minH="70vh"
    >
      <GridItem colSpan={{ base: 6, md: 3, xl: 2 }}>
        <Center
          boxShadow="base"
          flexDirection="column"
          textAlign="center"
          p="30px"
          borderRadius={10}
        >
          <Icon textStyle="ContactIcon" color="FirstColor" as={FaPhone}></Icon>
          <List>
            <ListItem my={5} fontSize="20px">
              <Link to="tel:+982177123456">021-77123456</Link>
            </ListItem>
            <ListItem my={5} fontSize="20px">
              <Link to="tel:+982177123456">021-77123456</Link>
            </ListItem>
          </List>
        </Center>
      </GridItem>
      <GridItem colSpan={{ base: 6, md: 3, xl: 2 }}>
        <Center
          boxShadow="base"
          flexDirection="column"
          textAlign="center"
          p="30px"
          borderRadius={10}
        >
          <Icon
            textStyle="ContactIcon"
            color="FirstColor"
            as={FaEnvelope}
          ></Icon>
          <List>
            <ListItem my={5} fontSize="20px">
              <Link to="mailto:example@support.com">example@support.com</Link>
            </ListItem>
            <ListItem my={5} fontSize="20px">
              <Link to="mailto:example@support.com">example@support.com</Link>
            </ListItem>
          </List>
        </Center>
      </GridItem>
      <GridItem colSpan={{ base: 6, md: 3, xl: 2 }}>
        <Center
          boxShadow="base"
          flexDirection="column"
          textAlign="center"
          p="30px"
          borderRadius={10}
        >
          <Icon
            textStyle="ContactIcon"
            color="FirstColor"
            as={IoLocation}
          ></Icon>
          <Text my={6} px={10}>
            we provide product around the world and our address must be a
            secrets so you can contact us with other ways
          </Text>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default ContactUs;
