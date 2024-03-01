import { createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import ProductsPage from "./pages/Products/ProductsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";

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

export default router;
