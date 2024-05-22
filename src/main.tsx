import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { SwitchTheme } from "./theme/ColorModeSwitch.tsx";
import CustomizeTheme from "./theme/index.ts";
import router from "./route/rouates.tsx";
import "./assets/Global.css"

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={CustomizeTheme}>
        <ColorModeScript
          initialColorMode={SwitchTheme.config.initialColorMode}
        />
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
