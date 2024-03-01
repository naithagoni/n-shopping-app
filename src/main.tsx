import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./RouterLayout";
import "./index.scss";

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
