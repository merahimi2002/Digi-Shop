import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
]);

export default router;
