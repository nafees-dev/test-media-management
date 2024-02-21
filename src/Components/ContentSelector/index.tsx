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
              "& li": { backgroundColor: "#3A394080 !important", paddingY: "15px" },
            },
          }}
          {...props}
        />
      )}
      // PaperComponent={({ children }) => (
      //   <Box sx={{ backgroundColor: "#3A39404D", borderRadius: "12px", marginTop: "8px" }}>
      //     {children}
      //   </Box>
      // )}
      popupIcon={<KeyboardArrowDownIcon />}
      options={options || []}
      renderInput={(params) => (
        <TextField sx={{ ".Mui-focused": { color: "white !important" } }} {...params} label={label} />
      )}
    />
  );
}
