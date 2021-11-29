import { TextField, MenuItem } from "@material-ui/core";
import React, { FunctionComponent, useState } from "react";

const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const TimeSelector: FunctionComponent = () => {
  const [value, setValue] = useState(undefined);
  return (
    <>
      <TextField
        id="hours"
        variant="outlined"
        defaultValue={0}
        value={value}
        label="Hours"
        onChange={() => setValue(value)}
        select
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="minutes"
        variant="outlined"
        defaultValue={0}
        value={value}
        label="Minutes"
        onChange={() => setValue(value)}
        select
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="seconds"
        variant="outlined"
        defaultValue={0}
        value={value}
        label="Seconds"
        onChange={() => setValue(value)}
        select
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default TimeSelector;
