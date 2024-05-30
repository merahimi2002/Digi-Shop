import { NavLink } from "react-router-dom";
import { Center, Image } from "@chakra-ui/react";
import logo from "../../../public/image/Logo.png";

const Logo = () => {
  return (
    <Center h={{base : "auto" , lg :"100%"}}>
      <NavLink to="/Digi-Shop">
        <Image src={logo} w={{ base: "80px", md: "100px" }}></Image>
      </NavLink>
    </Center>
  );
};

export default Logo;
