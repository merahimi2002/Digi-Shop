import { HStack, Image } from "@chakra-ui/react";
import Logo from "../../public/image/Logo.png";
import ColorModeSwitch from "../services/ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack padding="10px 40px" justifyContent={"space-between"}>
      <Image src={Logo} boxSize="100px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
