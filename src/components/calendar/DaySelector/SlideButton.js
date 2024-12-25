import { useSwiper } from "swiper/react";
import nextIcon from "../../../assets/next.png";
import prevIcon from "../../../assets/prev.png";
import { Box } from "@mui/material";

function SlidePrevButton() {
  const swiperInstance = useSwiper();
  return (
    <Box
      component="img"
      src={prevIcon}
      onClick={() => swiperInstance.slidePrev()}
      height={48}
      width={48}
      position="absolute"
      left={0}
      top={0}
      sx={{ cursor: "pointer" }}
      zIndex={999}
      bgcolor="#fff"
    ></Box>
  );
}

function SlideNextButton() {
  const swiperInstance = useSwiper();
  return (
    <Box
      component="img"
      src={nextIcon}
      onClick={() => swiperInstance.slideNext()}
      height={48}
      width={48}
      position="absolute"
      right={0}
      top={0}
      sx={{ cursor: "pointer" }}
      zIndex={999}
      bgcolor="#fff"
    ></Box>
  );
}

export { SlideNextButton, SlidePrevButton };
