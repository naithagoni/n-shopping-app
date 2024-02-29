import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Products from "./pages/Products/Products.tsx";
import NotFound from "./pages/NotFoundPage/NotFound.tsx";
import App from "./App.tsx";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    // errorElement: <NotFound />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
if (process.env.NODE_ENV === "development") {
  root.render(<RouterProvider router={router} />);
} else {
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
