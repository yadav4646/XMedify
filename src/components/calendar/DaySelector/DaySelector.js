import { Box, Stack, Typography } from "@mui/material";
import { add, isEqual, startOfDay, format } from "date-fns";

export default function DaySelector({
  selectedDate,
  setSelectedDate,
  totalSlots,
}) {
  const today = startOfDay(new Date());
  const dateItems = Array.from({ length: 7 }, (_, i) =>
    add(today, { days: i })
  );

  const getDateLabel = (date) => {
    if (isEqual(date, today)) return "Today";
    if (isEqual(date, add(today, { days: 1 }))) return "Tomorrow";
    return format(date, "E, d LLL");
  };

  const handleDateSelection = (date) => {
    if (typeof setSelectedDate === "function") {
      setSelectedDate(date);
    } else {
      console.error(
        "setSelectedDate function is not defined or not a function"
      );
    }
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center" pt={3}>
      {dateItems.map((date, index) => (
        <Box
          key={index}
          onClick={() => handleDateSelection(date)}
          sx={{
            cursor: "pointer",
            padding: 2,
            borderRadius: 1,
            backgroundColor: isEqual(date, selectedDate)
              ? "primary.main"
              : "grey.100",
            color: isEqual(date, selectedDate) ? "#fff" : "#000",
            textAlign: "center",
          }}
        >
          <Typography fontWeight={600}>{getDateLabel(date)}</Typography>
          <Typography variant="caption">{`${totalSlots} slots`}</Typography>
        </Box>
      ))}
    </Stack>
  );
}
