import { Fragment } from "react/jsx-runtime";
import { Image } from "@chakra-ui/react";
import Carousel from "framer-motion-carousel";

interface Props {
  Slider: string[];
  Count: number;
}

const CarouselSlider = ({ Slider, Count }: Props) => {
  let Counter = [1];
  for (let i = 1; i < Count; i++) {
    Counter.push(i);
  }
  return (
    <Fragment>
      <Carousel autoPlay={true} interval={5000} loop={true}>
        {Counter.map((item, i) => (
          <Image
            m="auto"
            pb="20px"
            draggable="false"
            key={i}
            src={Slider[i]}
          ></Image>
        ))}
      </Carousel>
    </Fragment>
  );
};

export default CarouselSlider;
