import {
  Box,
  Container,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./NavBar.module.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const [isNavigationVisible, setNavigationVisible] = useState(false);

  return (
    <header>
      <Box p={1} bgcolor="primary.main">
        <Typography fontSize={14} textAlign="center" color="#fff">
          Ensuring the health and safety of our patients and team remains our
          top priority with optimal hygiene practices.
        </Typography>
      </Box>

      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <Link to="/">
            <img src={logo} alt="App Logo" height={27} />
          </Link>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ xs: "flex-start", md: "center" }}
            className={[
              styles.navigationMenu,
              isNavigationVisible && styles.menuVisible,
            ]}
            pt={{ xs: 12, md: 1 }}
            pb={{ xs: 4, md: 1 }}
            px={{ xs: 4, md: 0 }}
          >
            <Link>Find Specialists</Link>
            <Link to="/search">Health Facilities</Link>
            <Link>Pharmacy</Link>
            <Link>Procedures</Link>
            <Link>Provider Solutions</Link>
            <Link>Amenities</Link>
            <Link to="/my-appointments">
              <Button variant="contained" disableElevation>
                My Appointments
              </Button>
            </Link>

            {isSmallScreen && (
              <IconButton
                onClick={() => setNavigationVisible(false)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 32,
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Stack>

          {isSmallScreen && (
            <IconButton onClick={() => setNavigationVisible(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>
    </header>
  );
}
