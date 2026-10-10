
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from "../pages/Home";
import GalleryPage from "../pages/GalleryPage";
import Contact from "../pages/Contact";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;

