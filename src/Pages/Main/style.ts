import { Box, Chip, Typography, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  paddingInline: "2rem",
  marginTop: "4.81rem",
  minHeight: "calc(100vh - 19.2rem)",
  [theme.breakpoints.down("lg")]: {
    minHeight: "calc(100vh - 20.5rem)",
    marginTop: "4rem",
    marginBottom: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem",
    paddingInline: "1rem",
  }
}));

export const MainHeading = styled(Typography)(() => ({
  fontWeight: "500",
  fontSize: "1.5rem",
  lineHeight: "2.25rem",
}));

export const SubHeading = styled(Typography)(() => ({
  fontWeight: "400",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  color: "#D0CFD1",
}));

export const Questions = styled(Typography)(() => ({
  fontWeight: "500",
  fontSize: "1.1rem",
  lineHeight: "1.7rem",
  marginBottom: "1.5rem",
}));

export const ContentChip = styled(Chip)((props: { activebutton: string; content: string }) => ({
  backgroundColor: props.activebutton === props.content ? "#523FD7" : "transparent",
  maxWidth: "7.8rem",
  minWidth: "5rem",
  height: "3rem",
  border: props.activebutton === props.content ? 'none' : "1px solid #616066",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "White",
  fontSize: "0.875rem",
  fontWeight: "400",
  ":focus": { backgroundColor: props.activebutton === props.content ? "#523FD7" : "transparent" },
}));
