import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export default function AutoHideSnackbar({ isOpen, setIsOpen, alertMessage }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setIsOpen(false);
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        icon={false}
        sx={{ bgcolor: "primary.green", color: "#fff" }}
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  );
}
