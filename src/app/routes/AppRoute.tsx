import { createBrowserRouter } from "react-router-dom";
import { LayoutApp } from "../layout/Layout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutApp />,
    children: [
      
    ],
  },
]);
