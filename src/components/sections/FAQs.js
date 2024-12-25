import { Box, Container, Grid, Typography } from "@mui/material";
import faqImage from "../../assets/faqs-banner.jpg";
import CustomizedAccordions from "../Accordion";

export default function FAQs() {
  const faqList = [
    {
      question: "Why choose our medical services for your family?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "What makes us different from others?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Trusted & experienced senior care & love",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How to get an appointment for emergency cases?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return (
    <Box py={4}>
      <Container maxWidth="xl">
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Get Your Answers
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Frequently Asked Questions
        </Typography>
        <Grid container alignItems="center" spacing={5}>
          <Grid item xs={12} md={6}>
            <Box src={faqImage} component="img" width={1} height="auto" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box maxWidth={450}>
              <CustomizedAccordions data={faqList} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
