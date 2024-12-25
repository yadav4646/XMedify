import DaySelector from "./DaySelector/DaySelector";
import { Box } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import TimeSlotPicker from "./TImeSlot/TimeSlot";
import ModalBooking from "./../ModalBooking";

export default function Calendar({ availableSlots = {}, details }) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
  const [bookingDetails, setBookingDetails] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const validSlots = {
    morning: availableSlots.morning || ["9:00 AM", "10:00 AM"],
    afternoon: availableSlots.afternoon || ["1:00 PM", "2:00 PM"],
    evening: availableSlots.evening || ["5:00 PM", "6:00 PM"],
  };

  const totalSlots =
    validSlots.morning.length +
    validSlots.afternoon.length +
    validSlots.evening.length;

  const handleSlotClick = (time) => {
    setBookingDetails({ bookingDate: selectedDate, bookingTime: time });
    setModalOpen(true);
  };

  const handleBookingConfirmation = (confirmedBooking) => {
    const existingBookings = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    );
    const updatedBookings = [...existingBookings, confirmedBooking];
    localStorage.setItem("appointments", JSON.stringify(updatedBookings));

    alert(
      `Appointment confirmed for ${confirmedBooking.bookingDate} at ${confirmedBooking.bookingTime}`
    );
    setModalOpen(false); // Close modal
  };

  return (
    <Box>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimeSlotPicker
        slotGroups={validSlots}
        selectedDay={selectedDate}
        userDetails={details}
        onBooking={handleSlotClick} // Open modal on slot click
      />
      <ModalBooking
        open={modalOpen}
        setOpen={setModalOpen}
        bookingDetails={bookingDetails}
        showSuccessMessage={handleBookingConfirmation}
      />
    </Box>
  );
}
