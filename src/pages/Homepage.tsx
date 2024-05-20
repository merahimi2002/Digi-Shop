import { Fragment } from "react/jsx-runtime";
import CarouselSlider from "../component/CarouselSlider";
import Slider01 from "../../public/image/Slider/Slider01.jpg";
import Slider02 from "../../public/image/Slider/Slider02.jpg";
import Slider03 from "../../public/image/Slider/Slider03.jpg";
const HomePage = () => {
  return (
    <Fragment>
      <CarouselSlider Count={3} Slider={[Slider01, Slider02, Slider03]} />
    </Fragment>
  );
};

export default HomePage;
