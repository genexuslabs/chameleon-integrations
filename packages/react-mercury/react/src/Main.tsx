import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Add Chameleon types
import "@genexus/mercury/dist/bundles/css/all.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <Error />,
    children: [
      {
        path: "/", // LandingPage
        lazy: async () => ({
          Component: (await import("./routes/LandingPage")).default,
        }),
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
