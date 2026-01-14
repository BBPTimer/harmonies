import { OutlinedInput } from "@mui/material";

const NumberField = ({ value, callback }) => {
  return (
    <OutlinedInput
      value={value}
      onChange={(e) => callback(e.target.value)}
      type="number"
      required
      size="small"
      slotProps={{
        input: {
          inputMode: "numeric",
          pattern: "[0-9]*",
          min: "0",
          max: "50",
        },
      }}
      sx={{ fontFamily: "Barriecito", width: "65px" }}
    />
  );
};

export default NumberField;
