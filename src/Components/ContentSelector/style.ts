import { Autocomplete, styled } from "@mui/material";

export const AutoCompleteSx = styled(Autocomplete)(() => ({
  ".MuiAutocomplete-input": { color: "white" },
  ".MuiInputLabel-root": {
    color: "white",
    fontSize: "1rem",
    fontWeight: "500",
    "&:focus": {
      color: "white",
    },
    "&:active": {
      color: "white",
    },
  },
  ".MuiOutlinedInput-root": {
    backgroundColor: "#3A39404D",
    borderRadius: "12px",
    // border: "none",
  },
  ".MuiAutocomplete-popupIndicator": {
    color: "white",
  },
  // ".MuiAutocomplete-popper": { backgroundColor: 'red !important' },
  // ".MuiAutocomplete-paper": { backgroundColor: 'red !important' },
  ".MuiAutocomplete-clearIndicator": { color: "white" },
  ".MuiOutlinedInput-notchedOutline": { border: "none" },
}));
