import { Box, Stack, Typography } from "@mui/material";

export default function IconCard({
  img,
  title,
  bgColor,
  isActive = false,
  hasShadow = false,
}) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      bgcolor={isActive ? "rgba(42,167,255,0.08)" : bgColor}
      p={3}
      borderRadius={2}
      border={isActive ? "1px solid #2AA7FF" : "0"}
      boxShadow={hasShadow ? "0 0 24px rgba(0,0,0,0.09)" : "none"}
    >
      <Box
        component="img"
        src={img}
        height={60}
        width={60}
        alt={`${title} Icon`}
      />
      <Typography
        color={isActive ? "primary.main" : "#ABB6C7"}
        fontSize={18}
        fontWeight={isActive ? 600 : 400}
      >
        {title}
      </Typography>
    </Stack>
  );
}
