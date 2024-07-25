import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
// import ErrorPage from "./ErrorPage";
import ProductPage from "../pages/ProductPage";
import Product from "../component/Product/Product";
import CategoriyItem from "../component/Category/CategoryItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/Digi-Shop/", element: <Home /> },
      { path: "/Digi-Shop/about", element: <AboutUs /> },
      { path: "/Digi-Shop/contact", element: <ContactUs /> },
      {
        path: "/Digi-Shop/product",
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
