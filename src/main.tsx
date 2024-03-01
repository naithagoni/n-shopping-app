import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import ProductsPage from "./pages/Products/ProductsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";

import "./index.scss";

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <App />,
//     // errorElement: <NotFound />,
//   },
//   {
//     path: "/products",
//     element: <Products />,
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
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
