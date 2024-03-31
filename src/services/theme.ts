import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    firstColor: "#008080",
  },
  styles: {
    global: {
      a: {
        _hover: {
          color: "#008080",
        },
        _active:{
          color: "#008080",
        }
      },
    },
  },
});

export default theme;
