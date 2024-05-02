import { AvatarGroup, Center } from "@chakra-ui/react";
import { ColorModeSwitch } from "../../theme/ColorModeSwitch";
import { LoveButton, ShopButton } from "./NavbarActionItem";

const NavBarAction = () => {
  return (
    <Center h={["auto", "100%"]} mt={["10px", "0px"]}>
      <AvatarGroup>
        <ShopButton />
        <LoveButton />
        <NavBarAction />
        <ColorModeSwitch />
      </AvatarGroup>
    </Center>
  );
};

export default NavBarAction;
