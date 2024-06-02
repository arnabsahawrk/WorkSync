import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import CustomProvider from "./providers/CustomProvider";
import { Toaster } from "react-hot-toast";

// Create a client for TanStack
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* tan-stack  */}
    <QueryClientProvider client={queryClient}>
      {/* dynamic title  */}
      <HelmetProvider>
        {/* custom provider  */}
        <CustomProvider>
          <RouterProvider router={router} />
          <Toaster />
        </CustomProvider>
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
