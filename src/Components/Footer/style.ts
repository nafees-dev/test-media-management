import { Box, Button, Typography, styled } from "@mui/material";

export const FooterComponent = styled(Box)(({ theme }) => ({
  height: "7.25rem",
  backgroundColor: "#09090D",
  paddingInline: "2rem",
  borderTop: "1px solid #3A3940",
  [theme.breakpoints.down("sm")]: {
    borderTop: "none",
    backgroundColor: "#09090D66",
    paddingBlock: "1.5rem",
    paddingInline: "1rem",
  },
}));

export const BackButton = styled(Button)(({ theme }) => ({
  height: "3.1rem",
  width: "9.125rem",
  borderRadius: "32px",
  border: "1px solid #3A3940",
  fontWeight: "400",
  fontSize: "1rem",
  color: "white",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const NextButton = styled(Button)(({ theme }) => ({
  height: "3.25rem",
  width: "14.6rem",
  borderRadius: "32px",
  border: "1px solid #3A3940",
  padding: "1rem 2rem 1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  ":focus": {
    backgroundColor: "white",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: 'center',
  },
}));

export const NextButtonText = styled(Typography)(() => ({
  fontWeight: "400",
  fontSize: "1rem",
  background: "-webkit-linear-gradient(90deg, #523FD7 -20.19%, #FF7DFF 168.46%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));
