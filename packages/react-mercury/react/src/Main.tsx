import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Mercury base CSS
import "./assets/generated-bundles/base/base.css";
import "./assets/generated-bundles/resets/box-sizing.css";
import "./assets/generated-bundles/base/icons.css";

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <Error />,
    children: [
      {
        path: "/", // LandingPage
        lazy: async () => ({
          Component: (await import("./routes/LandingPage/LandingPage")).default,
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
