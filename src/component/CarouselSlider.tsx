import { Fragment } from "react/jsx-runtime";
import { Image } from "@chakra-ui/react";
import Carousel from "framer-motion-carousel";
import Slider01 from "../../public/image/Slider/Slider01.jpg";
import Slider02 from "../../public/image/Slider/Slider02.jpg";

const CarouselSlider = () => {
  const Slider = [Slider01, Slider02];
  return (
    <Fragment>
      <Carousel autoPlay={true} interval={5000} loop={true} >
        {[1, 2].map((item, i) => (
          <Image draggable="false" key={i} src={Slider[i]}></Image>
        ))}
      </Carousel>
    </Fragment>
  );
};

export default CarouselSlider;
