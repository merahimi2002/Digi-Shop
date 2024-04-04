import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Button,
  Center,
} from "@chakra-ui/react";
import { ColorModeSwitch } from "../../theme/ColorModeSwitch";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { GiEternalLove } from "react-icons/gi";
const NavBarAction = () => {
  return (
    <Center h={["auto", "100%"]} mt={["10px", "0px"]}>
      <AvatarGroup gap={2}>
        <Button p={0} _hover={{ bgColor: "SecondColor" }}>
          <Avatar
            icon={<FiShoppingCart />}
            bgColor="SecondColor"
            color="FirstColor"
            fontSize="30px"
          >
            <AvatarBadge
              boxSize="1.25em"
              bg="red.400"
              borderColor="red.400"
              color="white"
              p={2.5}
              fontSize={18}
            >
              4
            </AvatarBadge>
          </Avatar>
        </Button>
        <Button p={0} _hover={{ bgColor: "SecondColor" }}>
          <Avatar
            icon={<GiEternalLove />}
            bgColor="SecondColor"
            color="FirstColor"
            fontSize="30px"
          >
            <AvatarBadge
              boxSize="1.25em"
              bg="red.400"
              borderColor="red.400"
              color="white"
              p={2.5}
              fontSize={18}
            >
              4
            </AvatarBadge>
          </Avatar>
        </Button>
        <Button
          p={0}
          _hover={{ bgColor: "SecondColor" }}
          display={["none", "flex"]}
        >
          <Avatar
            icon={<FiLogIn />}
            bgColor="SecondColor"
            color="FirstColor"
            fontSize="30px"
          ></Avatar>
        </Button>
        <ColorModeSwitch />
      </AvatarGroup>
    </Center>
  );
};

export default NavBarAction;
