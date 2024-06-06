import { Box } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CarouselsProps {
  Items: any[];
  ItemsBreakPoint: {
    desktop: number;
    tablet: number;
    mobile: number;
  };
}

const Carousels = ({ Items, ItemsBreakPoint }: CarouselsProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: ItemsBreakPoint.desktop,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: ItemsBreakPoint.tablet,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: ItemsBreakPoint.mobile,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      transitionDuration={400}
      // arrows={false}
      // containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-40-px"
    >
      {Items.map((i) => <Box key={i}>{i}</Box>)}
    </Carousel>
  );
};

export default Carousels;
