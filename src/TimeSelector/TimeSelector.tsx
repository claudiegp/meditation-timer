import { TextField, MenuItem, Box, Container } from "@material-ui/core";
import React, { FunctionComponent, useEffect, useState } from "react";
import { calculateTotalSeconds } from "../Utilities/time_utility";

const optionsHours: number[] = Array.from(Array(25).keys());
const optionsMinutes: number[] = Array.from(Array(61).keys());
const optionsSeconds: number[] = Array.from(Array(61).keys());

const TimeSelector: FunctionComponent = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);

  console.log(totalSeconds);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);

  useEffect(() => {
    setTotalSeconds(calculateTotalSeconds(hours, minutes, seconds));

    console.log(totalSeconds);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
  }, [hours, minutes, seconds, totalSeconds]);

  return (
    <>
      <Container>{totalSeconds} seconds</Container>
      <br></br>
      <TextField
        id="hours"
        variant="outlined"
        defaultValue={0}
        value={hours}
        label="Hours"
        onChange={(event) => setHours(parseInt(event.target.value))}
        select
      >
        {optionsHours.map((option) => (
          <MenuItem key={option} value={option} id="menu-item-hours">
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="minutes"
        variant="outlined"
        defaultValue={0}
        value={minutes}
        label="Minutes"
        onChange={(event) => setMinutes(parseInt(event.target.value))}
        select
      >
        {optionsMinutes.map((option) => (
          <MenuItem key={option} value={option} id="menu-item-minutes">
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="seconds"
        variant="outlined"
        defaultValue={0}
        value={seconds}
        label="Seconds"
        onChange={(event) => setSeconds(parseInt(event.target.value))}
        select
      >
        {optionsSeconds.map((option) => (
          <MenuItem key={option} value={option} id="menu-item-seconds">
            {option}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default TimeSelector;
