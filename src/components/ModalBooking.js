import { useState } from "react";
import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { format } from "date-fns";

export default function ModalBooking({
  open,
  setOpen,
  bookingDetails,
  showSuccessMessage,
}) {
  const [email, setEmail] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();

    // Add email to the booking details
    const confirmedBooking = { ...bookingDetails, email };

    // Pass the confirmed booking to the parent
    showSuccessMessage(confirmedBooking);

    // Reset and close modal
    setEmail("");
    setOpen(false);
  };

  const formatDate = (day) => {
    if (day) {
      return format(new Date(day), "E, d LLL");
    } else {
      return null;
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: { xs: 3, md: 4 },
          outline: 0,
          bgcolor: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography component="h3" variant="h3">
          Confirm Booking
        </Typography>
        <Typography fontSize={14} mb={3}>
          <Box component="span">
            Please enter your email to confirm booking for{" "}
          </Box>
          <Box component="span" fontWeight={600}>
            {`${bookingDetails?.bookingTime || "N/A"} on ${
              formatDate(bookingDetails?.bookingDate) || "N/A"
            }`}
          </Box>
        </Typography>
        <form onSubmit={handleBooking}>
          <Stack alignItems="flex-start" spacing={2}>
            <TextField
              type="email"
              label="Enter your email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Stack direction="row" spacing={1}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disableElevation
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
