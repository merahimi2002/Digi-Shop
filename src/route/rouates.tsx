import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "./ErrorPage";
import ProductPage from "../pages/ProductPage";
import CategoriyItem from "../component/Product/CategoryItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/Digi-Shop", element: <HomePage /> },
      { path: "/Digi-Shop/about", element: <AboutUs /> },
      { path: "/Digi-Shop/contact", element: <ContactUs /> },
      {
        path: "/Digi-Shop/product",
        element: <ProductPage />,
        children: [{ path: ":category", element: <CategoriyItem /> }],
      },
    ],
  },
]);

export default router;
