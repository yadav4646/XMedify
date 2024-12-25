import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.png";
import facebookIcon from "../../assets/fb.png";
import pinterestIcon from "../../assets/pinterest.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/yt.png";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height={1}
            >
              <Box
                src={logo}
                height={36}
                alt="Healthcare Logo"
                component="img"
                mb={2}
              />
              <Stack direction="row" spacing={1.5}>
                <Box component="img" src={facebookIcon} height={36} />
                <Box component="img" src={twitterIcon} height={36} />
                <Box component="img" src={youtubeIcon} height={36} />
                <Box component="img" src={pinterestIcon} height={36} />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Pricing Plans</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Book Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>Orthopedic Care</FooterLink>
              <FooterLink>Neurology Services</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Eye Care</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>FAQs</FooterLink>
              <FooterLink>Support Center</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
              <FooterLink>Contact Us</FooterLink>
              <FooterLink>Blog</FooterLink>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          Copyright ©2023 HealthCarePlatform.com. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}
