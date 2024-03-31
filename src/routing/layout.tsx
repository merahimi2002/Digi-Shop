import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";


const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <div id="main">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Layout;
