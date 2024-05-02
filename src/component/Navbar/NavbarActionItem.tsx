import {
  Avatar,
  AvatarBadge,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
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
          0
        </AvatarBadge>
      </Avatar>
    </Button>
  );
};

export const LoveButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        p={0}
        bg="NoColor"
        _hover={{ bg: "NoColor" }}
        onClick={onOpen}
      >
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
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Favorite Cart</DrawerHeader>
          <DrawerBody>
      
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
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
