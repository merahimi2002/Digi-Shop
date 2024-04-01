import {
  Button,
  extendTheme,
  HStack,
  ThemeConfig,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const config: ThemeConfig = {
  initialColorMode: "light",
  cssVarPrefix: "Shop",
};

export const SwitchTheme = extendTheme(config);

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  let icon = <MoonIcon />;
  if (colorMode === "dark") {
    icon = <SunIcon />;
  }

  return (
    <HStack>
      <Button
        fontSize="30px"
        bg="none"
        _hover={{
          background: "none",
        }}
        onClick={toggleColorMode}
      >
        {icon}
      </Button>
    </HStack>
  );
};
