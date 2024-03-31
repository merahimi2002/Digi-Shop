import {
  Center,
  Grid,
  GridItem,
  HStack,
  Image,
  Menu,
  MenuItem,
} from "@chakra-ui/react";
import Logo from "../../public/image/Logo.png";
import ColorModeSwitch from "../services/ColorModeSwitch";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" bg="gray.300" padding="10px 40px">
      <GridItem colSpan={{ base: 3, md: 1 }}>
        <Center>
          <NavLink to="/">
            <Image src={Logo} boxSize={{base:"80px", md:"100px"}}></Image>
          </NavLink>
        </Center>
      </GridItem>
      <GridItem colSpan={{ base: 7, md: 9 }}>
        <Center h="100%">
          <HStack>
            <Menu>
              <MenuItem
                width="fit-content"
                fontSize="18px"
                fontWeight="500"
                _active={{ background: "none", color: "firstColor" }}
                _focus={{ background: "none" }}
              >
                <NavLink to="/">Home</NavLink>
              </MenuItem>
              <MenuItem
                width="fit-content"
                fontSize="18px"
                fontWeight="500"
                _active={{ background: "none", color: "firstColor" }}
                _focus={{ background: "none" }}
              >
                <NavLink to="/about">About us</NavLink>
              </MenuItem>
              <MenuItem
                width="fit-content"
                fontSize="18px"
                fontWeight="500"
                _active={{ background: "none", color: "firstColor" }}
                _focus={{ background: "none" }}
              >
                <NavLink to="/contact">Contact us</NavLink>
              </MenuItem>
            </Menu>
          </HStack>
        </Center>
      </GridItem>
      <GridItem colSpan={2}>
        <Center h="100%">
          <ColorModeSwitch />
        </Center>
      </GridItem>
    </Grid>
  );
};

export default Navbar;
