import { HStack, Image } from "@chakra-ui/react"
import Logo from "../../public/image/Logo.png"


const Navbar = () => {
  return (
    <HStack px={10} py={5}>
        <Image src={Logo} boxSize='100px'></Image>
    </HStack>
  )
}

export default Navbar