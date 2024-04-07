import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer";



const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
