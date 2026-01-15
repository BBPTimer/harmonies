import { OutlinedInput } from "@mui/material";

const NumberField = ({ value, callback, array, index, tabIndex }) => {
  const updateValue = (newValue) => {
    if (array) {
      const nextCubePoints = array.map((c, i) => {
        if (i === index) {
          return newValue;
        } else {
          // The rest haven't changed
          return c;
        }
      });
      callback(nextCubePoints);
    } else {
      callback(newValue);
    }
  };

  return (
    <OutlinedInput
      value={value}
      onChange={(e) => updateValue(e.target.value)}
      type="number"
      required
      slotProps={{
        input: {
          inputMode: "numeric",
          pattern: "[0-9]*",
          tabIndex: tabIndex,
        },
      }}
      sx={{ fontFamily: "Barriecito", width: "65px" }}
    />
  );
};

export default NumberField;
