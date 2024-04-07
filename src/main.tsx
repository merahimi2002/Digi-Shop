import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { SwitchTheme } from "./theme/ColorModeSwitch.tsx";
import CustomizeTheme from "./theme/index.ts";
import router from "./routing/rouates.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={CustomizeTheme}>
        <ColorModeScript
          initialColorMode={SwitchTheme.config.initialColorMode}
        />
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
