import { Avatar, AvatarBadge, Button } from "@chakra-ui/react";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { GiEternalLove } from "react-icons/gi";

export const ShopButton = () => {
  return (
    <Button p={0} bg="NoColor" _hover={{ bg: "NoColor" }}>
      <Avatar
        icon={<FiShoppingCart />}
        bgColor="NoColor"
        color="FirstColor"
        fontSize="30px"
      >
        <AvatarBadge borderColor="red.400" textStyle="AvatarBadge">
          4
        </AvatarBadge>
      </Avatar>
    </Button>
  );
};

export const LoveButton = () => {
  return (
    <Button p={0} bg="NoColor" _hover={{ bg: "NoColor" }}>
      <Avatar
        icon={<GiEternalLove />}
        bgColor="NoColor"
        color="FirstColor"
        fontSize="30px"
      >
        <AvatarBadge borderColor="red.400" textStyle="AvatarBadge">
          0
        </AvatarBadge>
      </Avatar>
    </Button>
  );
};

export const LoginButton = () => {
  return (
    <Button
      p={0}
      bg="NoColor"
      _hover={{ bgColor: "NoColor" }}
      display={["none", "flex"]}
    >
      <Avatar
        icon={<FiLogIn />}
        bgColor="NoColor"
        color="FirstColor"
        fontSize="30px"
      ></Avatar>
    </Button>
  );
};
