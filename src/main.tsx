import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { SwitchTheme } from "./theme/ColorModeSwitch.tsx";
import CustomizeTheme from "./theme/index.ts";
import router from "./routing/rouates.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={CustomizeTheme}>
      <ColorModeScript initialColorMode={SwitchTheme.config.initialColorMode}/>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);
