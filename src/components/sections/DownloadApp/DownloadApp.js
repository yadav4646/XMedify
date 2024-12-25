import appImage from "../../../assets/mobile.jpg";
import playStoreIcon from "../../../assets/playstore.png";
import appleLogo from "../../../assets/apple-logo.png";
import downloadArrow from "../../../assets/down-arr.png";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./SmsForm";

export default function DownloadApp() {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5.5}>
            <Box src={appImage} component="img" width={1} height="auto" />
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Box
              position="relative"
              pl={{ xs: "36px", md: "50px" }}
              mb={{ xs: 4, md: 0 }}
            >
              <Typography variant="h2" mb={2}>
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify{" "}
                </Box>
                App
              </Typography>

              <Box
                src={downloadArrow}
                component="img"
                width={{ xs: 24, md: 40 }}
                position="absolute"
                left={0}
                top={50}
              />

              <SmsForm />

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 2 }}
              >
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size="large"
                  startIcon={
                    <img src={playStoreIcon} height={24} alt="Play Store" />
                  }
                  variant="contained"
                  disableElevation
                >
                  Google Play
                </Button>
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size="large"
                  startIcon={
                    <img src={appleLogo} height={24} alt="App Store" />
                  }
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
