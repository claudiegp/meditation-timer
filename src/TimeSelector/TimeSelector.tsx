import { TextField, MenuItem } from "@mui/material";
import React, { FunctionComponent } from "react";

const optionsHours: number[] = Array.from(Array(6).keys());
const optionsMinutes: number[] = Array.from(Array(60).keys());
const optionsSeconds: number[] = Array.from(Array(60).keys());

interface TimeSelectorProps {
  hours: number;
  minutes: number;
  seconds: number;
  handleHoursChange: (event: any) => void;
  handleMinutesChange: (event: any) => void;
  handleSecondsChange: (event: any) => void;
}

const TimeSelector: FunctionComponent<TimeSelectorProps> = ({
  hours,
  minutes,
  seconds,
  handleHoursChange,
  handleMinutesChange,
  handleSecondsChange,
}) => {
  return (
    <>
      <TextField
        id="hours"
        data-testid="textfield-hours"
        variant="filled"
        defaultValue={0}
        value={hours}
        label="Hours"
        onChange={handleHoursChange}
        select
        color={"primary"}
      >
        {optionsHours.map((option, id) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="minutes"
        data-testid="textfield-minutes"
        variant="filled"
        defaultValue={0}
        value={minutes}
        label="Minutes"
        onChange={handleMinutesChange}
        select
      >
        {optionsMinutes.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="seconds"
        data-testid="textfield-seconds"
        variant="filled"
        defaultValue={0}
        value={seconds}
        label="Seconds"
        onChange={handleSecondsChange}
        select
      >
        {optionsSeconds.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <br></br>
      <br></br>
    </>
  );
};

export default TimeSelector;
