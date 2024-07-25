import { createHashRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "./ErrorPage";
import ProductPage from "../pages/ProductPage";
import Product from "../component/Product/Product";
import CategoriyItem from "../component/Category/CategoryItem";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <ContactUs /> },
      {
        path: "/product",
        element: <ProductPage />,
        children: [
          { path: "", element: <Product /> },
          { path: ":category", element: <CategoriyItem /> },
        ],
      },
    ],
  },
]);

export default router;
