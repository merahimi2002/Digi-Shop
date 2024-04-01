import { extendTheme } from "@chakra-ui/react";
import { styles } from "./Style";
import { colors } from "./components/Color";
import { Button } from "./components/Button";

const overrides = {
  colors,
  styles,
  components: {
    Button,
  },
};

const CustomizeTheme = extendTheme(overrides);

export default CustomizeTheme;
