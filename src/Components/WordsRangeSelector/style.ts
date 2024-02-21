import { Slider, styled } from "@mui/material";

export const SliderSx = styled(Slider)(() => ({
  margin: 0,
  padding: 0,
  width: "76%",
  ".MuiSlider-mark": { backgroundColor: 'transparent' },
  ".MuiSlider-markLabel": { color: "white", top: '12px' },
  ".MuiSlider-track": {
    background: "linear-gradient(90deg, #523FD7 -20.19%, #FF7DFF 168.46%)",
    border: "none",
    height: "6px",
  },
  ".MuiSlider-rail": {
    backgroundColor: "#3A3940",
  },
  ".MuiSlider-valueLabel": {
    height: "1.3rem",
    width: "2.11rem",
    borderRadius: "12px",
    backgroundColor: "#523FD7",
  },
  ".MuiSlider-thumb": {
    padding: "5px",
    border: "1px solid #FF7DFF",
    backgroundColor: "transparent",
  },
}));

