import { TextField, MenuItem } from "@material-ui/core";
import React, { FunctionComponent, useState } from "react";

const options = [0, 1, 2, 3, 4, 5];

const TimeSelector: FunctionComponent = () => {
  const [value, setValue] = useState(undefined);
  return (
    <TextField
      id="standard-basic"
      variant="standard"
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
  );
};

export default TimeSelector;
