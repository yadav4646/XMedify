import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import lesleyImage from "../../../assets/lesley.png";
import ahmadImage from "../../../assets/ahmad.png";
import heenaImage from "../../../assets/heena.png";
import ankurImage from "../../../assets/ankur.png";
import ahmadStevensImage from "../../../assets/ahmad-stevens.png";
import SpecialistCard from "./SpecialistCard";
import { Autoplay, Pagination } from "swiper/modules";

export default function Specialists() {
  const specialistsList = [
    { img: lesleyImage, name: "Dr. Lesley Hull", field: "Medicine" },
    { img: ahmadImage, name: "Dr. Ahmad Khan", field: "Neurologist" },
    { img: heenaImage, name: "Dr. Heena Sachdeva", field: "Orthopedics" },
    { img: ankurImage, name: "Dr. Ankur Sharma", field: "Medicine" },
    { img: ahmadStevensImage, name: "Dr. Ahmad Stevens", field: "Neurologist" },
    { img: lesleyImage, name: "Dr. Lesley Hull", field: "Medicine" },
    { img: ahmadImage, name: "Dr. Ahmad Khan", field: "Neurologist" },
    { img: heenaImage, name: "Dr. Heena Sachdeva", field: "Orthopedics" },
    { img: ankurImage, name: "Dr. Ankur Sharma", field: "Medicine" },
    { img: ahmadStevensImage, name: "Dr. Ahmad Stevens", field: "Neurologist" },
  ];

  return (
    <Box py={4} id="find-doctors">
      <Typography variant="h2" textAlign="center" mb={3} px={2}>
        Our Medical Specialists
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          767: {
            slidesPerView: 4,
          },
        }}
      >
        {specialistsList.map((specialist, index) => (
          <SwiperSlide key={index}>
            <SpecialistCard
              img={specialist.img}
              title={specialist.name}
              designation={specialist.field}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
