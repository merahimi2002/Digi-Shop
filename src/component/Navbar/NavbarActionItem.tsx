import { Fragment } from "react/jsx-runtime";
import { Flex, Text } from "@chakra-ui/react";
import { Drawer, DrawerBody, DrawerCloseButton } from "@chakra-ui/react";
import { DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { Avatar, AvatarBadge, Button, useDisclosure } from "@chakra-ui/react";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { GiEternalLove } from "react-icons/gi";
import { ProductQuantityStore } from "../../data/ProductQuantityStore";
import { formatCurrency } from "../../services/formatCurrency";
import useGetProduct from "../../data/useGetProducts";
import ProductFavoriteCart from "../Product/ProductFavoriteCart";
import ProductShoppingCart from "../Product/ProductShoppingCart";


export const ShopButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Product } = useGetProduct("");
  const { ProductState } = ProductQuantityStore();

  let SumProductQuantity = 0;
  Product?.map((i) => {
    SumProductQuantity =
      SumProductQuantity + ProductState[i.id].ProductQuantity;
  });
  let TotalPrice = 0;
  Product?.map((i) => {
    TotalPrice = TotalPrice + (ProductState[i.id].ProductQuantity * i.price);
  });

  return (
    <Fragment>
      <Button p={0} bg="NoColor" _hover={{ bg: "NoColor" }} onClick={onOpen}>
        <Avatar
          icon={<FiShoppingCart />}
          bgColor="NoColor"
          color="FirstColor"
          fontSize="30px"
        >
          <AvatarBadge borderColor="red.400" textStyle="AvatarBadge">
            {SumProductQuantity}
          </AvatarBadge>
        </Avatar>
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>
          <DrawerBody>
            {Product?.map((pro) =>
              ProductState[pro.id].ProductQuantity > 0 ? (
                <ProductShoppingCart
                  key={pro.id}
                  id={pro.id}
                  title={pro.title}
                  price={pro.price}
                  image={pro.image}
                />
              ) : null
            )}
            <Flex alignItems="center" justifyContent="center">
              <Text fontSize="30px" fontWeight="semibold">
                Total :
              </Text >
              <Text textStyle="Price" fontSize="28px" pl={5}>{formatCurrency(TotalPrice)}</Text>
            </Flex>
            <Button variant="ShopButton" color="FirstColor" bg="SecondColor">
              Payment
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export const LoveButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Product } = useGetProduct("");
  const { ProductState } = ProductQuantityStore();

  let SumLoveQuantity = 0;
  Product?.map((i) => {
    SumLoveQuantity = SumLoveQuantity + ProductState[i.id].LoveQuantity;
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
              ProductState[pro.id].LoveQuantity > 0 ? (
                <ProductFavoriteCart
                  key={pro.id}
                  id={pro.id}
                  title={pro.title}
                  price={pro.price}
                  image={pro.image}
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
