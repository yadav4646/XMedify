import { Chip, Stack, Typography, Divider } from "@mui/material";

export default function TimeSlotPicker({
  slotGroups,
  selectedDay,
  userDetails,
  onBooking,
}) {
  const handleTimeSlotClick = (slot) => {
    onBooking({ ...userDetails, bookingDate: selectedDay, bookingTime: slot });
  };

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {slotGroups.morning.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Morning
          </Typography>
          {slotGroups.morning.map((slot) => (
            <Chip
              key={slot}
              label={slot}
              color="primary"
              variant="outlined"
              sx={{
                borderRadius: "5px",
                fontSize: { xs: 10, md: 14 },
                cursor: "pointer",
                marginRight: 1,
                marginBottom: 1,
              }}
              onClick={() => handleTimeSlotClick(slot)}
            />
          ))}
        </Stack>
      )}
      {slotGroups.afternoon.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Afternoon
          </Typography>
          {slotGroups.afternoon.map((slot) => (
            <Chip
              key={slot}
              label={slot}
              color="primary"
              variant="outlined"
              sx={{
                borderRadius: "5px",
                fontSize: { xs: 10, md: 14 },
                cursor: "pointer",
                marginRight: 1,
                marginBottom: 1,
              }}
              onClick={() => handleTimeSlotClick(slot)}
            />
          ))}
        </Stack>
      )}
      {slotGroups.evening.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Evening
          </Typography>
          {slotGroups.evening.map((slot) => (
            <Chip
              key={slot}
              label={slot}
              color="primary"
              variant="outlined"
              sx={{
                borderRadius: "5px",
                fontSize: { xs: 10, md: 14 },
                cursor: "pointer",
                marginRight: 1,
                marginBottom: 1,
              }}
              onClick={() => handleTimeSlotClick(slot)}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
