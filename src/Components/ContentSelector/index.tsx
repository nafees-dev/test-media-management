import TextField from "@mui/material/TextField";
import { AutoCompleteSx } from "./style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  // Box,
  Popper,
} from "@mui/material";

interface ContentSelectorProps {
  options: string[];
  label: string;
}

export default function ContentSelector({ options, label }: ContentSelectorProps) {
  return (
    <AutoCompleteSx
      PopperComponent={(props) => (
        <Popper
          sx={{
            marginTop: "12px !important",
            borderRadius: "12px !important",
            display: 'block !important',
            backgroundColor: "transparent !important",
            ".MuiAutocomplete-listbox": {
              backgroundColor: "transparent !important",
              paddingY: "0 !important",
              border: "none !important",
              "& li": { backgroundColor: "#3A3940 !important", paddingY: "15px" },
            },
          }}
          {...props}
        />
      )}

      popupIcon={<KeyboardArrowDownIcon />}
      options={options || []}
      renderInput={(params) => (
        <TextField sx={{ ".Mui-focused": { color: "white !important" } }} {...params} label={label} />
      )}
    />
  );
}
