import { Fragment } from "react/jsx-runtime";
import { Drawer, DrawerBody, DrawerCloseButton } from "@chakra-ui/react";
import { DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { Avatar, AvatarBadge, Button, useDisclosure } from "@chakra-ui/react";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { GiEternalLove } from "react-icons/gi";
import { ProductCart } from "../Product/ProductCart";
import ProductAddItem from "../../data/Product/ProductAddItem";

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
  const { Product } = ProductAddItem();

  let SumLoveQuantity = 0;
  Product?.map((i) => {
    SumLoveQuantity = SumLoveQuantity + i.LoveQuantity;
  });

  return (
    <Fragment>
      <Button p={0} bg="NoColor" _hover={{ bg: "NoColor" }} onClick={onOpen}>
        <Avatar
          icon={<GiEternalLove />}
          bgColor="NoColor"
          color="FirstColor"
          fontSize="30px"
        >
          <AvatarBadge borderColor="red.400" textStyle="AvatarBadge">
            {SumLoveQuantity}
          </AvatarBadge>
        </Avatar>
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Favorite Cart</DrawerHeader>
          <DrawerBody>
            {Product?.map((pro) =>
              pro.LoveQuantity > 0 ? (
                <ProductCart
                  key={pro.id}
                  id={pro.id}
                  title={pro.title}
                  price={pro.price}
                  image={pro.image}
                  LoveQuantity={pro.LoveQuantity}
                />
              ) : null
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
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
