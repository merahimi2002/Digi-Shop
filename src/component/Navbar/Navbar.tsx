import { useState } from "react";
import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { MenuLinks, MenuToggle } from "./NavLinks";
import NavBarAction from "./NavbarAction";
import Logo from "./NavbarLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const NavbarBG = useColorModeValue("NavbarColor", "NavbarColor");

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      gap={5}
      p={{ base: "10px", md: "10px 40px" }}
      bg={NavbarBG}
      position="fixed"
      top={0}
      left={0}
      w="100%"
      zIndex={99}
    >
      <GridItem colSpan={{ base: 3, md: 1 }}>
        <Logo />
      </GridItem>
      <GridItem colSpan={{ base: 5, md: 9 }}>
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </GridItem>
      <GridItem colSpan={{ base: 3, md: 2 }}>
        <NavBarAction />
      </GridItem>
    </Grid>
  );
};

export default Navbar;
