import React from "react";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const CustomAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&::before": {
    display: "none",
  },
  "&:not(:last-child)": {
    marginBottom: 24,
  },
}));

const CustomAccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ color: "primary.main" }} />}
    {...props}
  />
))(() => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: 0,
  },
  padding: 0,
}));

const CustomAccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: 0,
}));

export default function CustomizedAccordions({ data = [] }) {
  const [expandedPanel, setExpandedPanel] = React.useState("");

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <Typography color="error" textAlign="center">
        No FAQs available.
      </Typography>
    );
  }

  return (
    <div>
      {data.map((item, index) => (
        <CustomAccordion
          key={index}
          expanded={expandedPanel === `panel${index}`}
          onChange={handleAccordionChange(`panel${index}`)}
        >
          <CustomAccordionSummary
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
          >
            <Typography
              fontSize={18}
              fontWeight={700}
              color="#1B3C74"
              lineHeight={1.2}
            >
              {item.question}
            </Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Typography fontSize={14}>{item.answer}</Typography>
          </CustomAccordionDetails>
        </CustomAccordion>
      ))}
    </div>
  );
}
