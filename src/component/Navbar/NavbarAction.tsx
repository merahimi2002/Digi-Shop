import { AvatarGroup, Center } from "@chakra-ui/react";
import { ColorModeSwitch } from "../../theme/ColorModeSwitch";
import { LoginButton, LoveButton, ShopButton } from "./NavbarActionItem";

const NavBarAction = () => {
  return (
    <Center h={{base : "auto" , lg :"100%"}} mt={["10px", "0px"]}>
      <AvatarGroup>
        <ShopButton />
        <LoveButton />
        <LoginButton />
        <ColorModeSwitch />
      </AvatarGroup>
    </Center>
  );
};

export default NavBarAction;
