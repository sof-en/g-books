import { createBrowserRouter } from "react-router-dom";
import { LayoutApp } from "../layout/Layout";
import { SearchLayout } from "../layout/SearchLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutApp />,
    children: [
    ],
  },
  {
    path: "/search",
    element: <SearchLayout />,
  },
]);
