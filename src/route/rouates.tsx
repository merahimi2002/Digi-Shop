import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "./ErrorPage";
import Product from "../pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/Digi-Shop", element: <Homepage /> },
      { path: "/Digi-Shop/about", element: <AboutUs /> },
      { path: "/Digi-Shop/contact", element: <ContactUs /> },
      { path: "/Digi-Shop/product", element: <Product/> },
    ],
  },
]);

export default router;
