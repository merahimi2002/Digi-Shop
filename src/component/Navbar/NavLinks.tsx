import { NavLink } from "react-router-dom";
import { Box, Stack, Icon, Center } from "@chakra-ui/react";
import { MdClose, MdMenu } from "react-icons/md";

interface MenuToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

export const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
  return (
    <Box display={{ base: "block", lg: "none" }} onClick={toggle}>
      {isOpen ? (
        <Icon boxSize={10} as={MdClose} color="red.500" mt={["10px", "0px"]} />
      ) : (
        <Icon boxSize={10} as={MdMenu} color="black" mt={["10px", "0px"]} />
      )}
    </Box>
  );
};

export const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Center h={{ base: "auto", lg: "100%" }}>
      <Box
        display={{ base: isOpen ? "block" : "none", lg: "block" }}
        flexBasis={{ base: "100%", lg: "auto" }}
      >
        <Stack
          spacing={[3, 8]}
          align="flex-start"
          justify={["flex-start", "center"]}
          direction={["column", "column", "column", "row"]}
          fontSize={["md", "xl"]}
          fontWeight="semibold"
          color="black"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/product">Product</NavLink>
        </Stack>
      </Box>
    </Center>
  );
};
