import { extendTheme } from "@chakra-ui/react";
import { styles } from "./Style";
import { colors } from "./components/Color";
import { Button } from "./components/Button";
import { textStyles } from "./Text";

const overrides = {
  colors,
  styles,
  textStyles,
  components: {
    Button,
  },
};

const CustomizeTheme = extendTheme(overrides);

export default CustomizeTheme;
