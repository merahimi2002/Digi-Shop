import { Fragment } from "react/jsx-runtime";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Center, Image } from "@chakra-ui/react";
import Navbar from "../component/Navbar/Navbar";
import ErrorFourOFour from "../../public/image/404.png";
import Error from "../../public/image/Error.png";
import Footer from "../component/Footer";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Fragment>
      <Navbar />
      <Center fontSize="100px">
        <Image src={isRouteErrorResponse(error) ? ErrorFourOFour : Error} />
      </Center>
      <Footer />
    </Fragment>
  );
};

export default ErrorPage;
