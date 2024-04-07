import { Fragment } from "react/jsx-runtime";
import CarouselSlider from "../component/CarouselSlider";
import Slider01 from "../../public/image/Slider/Slider01.jpg";
import Slider02 from "../../public/image/Slider/Slider02.jpg";

const Homepage = () => {
  return (
    <Fragment>
      <CarouselSlider Count={2} Slider={[Slider01, Slider02]} />
    </Fragment>
  );
};

export default Homepage;
