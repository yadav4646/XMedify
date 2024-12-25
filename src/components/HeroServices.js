import { Box, Grid, Typography } from "@mui/material";
import doctorIcon from "../assets/Doctor.png";
import pharmacyIcon from "../assets/Drugstore.png";
import hospitalIcon from "../assets/Hospital.png";
import capsuleIcon from "../assets/Capsule.png";
import ambulanceIcon from "../assets/Ambulance.png";
import IconCard from "./IconCard";
import { useMemo } from "react";

export default function HeroServices() {
  const heroServices = useMemo(
    () => [
      { img: doctorIcon, title: "Doctors" },
      { img: pharmacyIcon, title: "Labs" },
      { img: hospitalIcon, title: "Hospitals", isActive: true },
      { img: capsuleIcon, title: "Medical Store" },
      { img: ambulanceIcon, title: "Ambulance" },
    ],
    []
  );

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid container columnSpacing={{ xs: 1, md: 2 }} justifyContent="center">
        {heroServices.map((service) => (
          <Grid item key={service.title} xs={4} md={2.4}>
            <IconCard
              img={service.img}
              title={service.title}
              active={service.isActive || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
