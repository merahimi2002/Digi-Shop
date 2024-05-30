import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { MenuLinks, MenuToggle } from "./NavLinks";
import NavBarAction from "./NavbarAction";
import Logo from "./NavbarLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      gap={5}
      p={{ base: "10px", md: "10px 40px" }}
      bg="SecondColorDM"
      boxShadow="lg"
      position="fixed"
      backdropFilter="blur(50px)"
      top={0}
      left={0}
      w="100%"
      zIndex={99}
    >
      <GridItem
        colSpan={{ base: 12 }}
        display={{ base: "flex", md: "none" }}
        justifyContent="center"
        borderBottom="1px solid gray"
        pb={7}
      >
        <NavBarAction />
      </GridItem>
      <GridItem colSpan={{ base: 4, md: 2, lg: 1 }}>
        <Logo />
      </GridItem>
      <GridItem colSpan={{ base: 8, md: 7, lg: 9 }}>
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </GridItem>
      <GridItem
        colSpan={{ md: 3, lg: 2 }}
        display={{ base: "none", md: "flex" }}
        h="fit-content"
        p="25px 0"
      >
        <NavBarAction />
      </GridItem>
    </Grid>
  );
};

export default Navbar;
