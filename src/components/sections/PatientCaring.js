import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import caringBanner from "../../assets/patientcaring.png";
import checkIcon from "../../assets/tick-blue.png";

export default function PatientCaring() {
  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box component="img" src={caringBanner} width={1} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600} color="primary.main">
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>
            <Typography variant="h2" mb={1}>
              Patient{" "}
              <Box component="span" color="primary.main">
                Caring
              </Box>
            </Typography>
            <Typography color="#77829D" lineHeight={1.8}>
              Our goal is to deliver quality care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </Typography>
            <List sx={{ fontSize: { xs: 12, md: 18 } }}>
              {[
                "Stay Updated About Your Health",
                "Check Your Results Online",
                "Manage Your Appointments",
              ].map((text, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Box
                      component="img"
                      src={checkIcon}
                      height={22}
                      width={22}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontSize: { xs: 14, md: 18 },
                      fontWeight: 500,
                      color: "#1B3C74",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
