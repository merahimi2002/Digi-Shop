import { Button, HStack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
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

export default ColorModeSwitch;
