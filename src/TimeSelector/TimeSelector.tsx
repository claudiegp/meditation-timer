import { TextField, MenuItem, Container } from "@material-ui/core";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import ButtonBanner from "../ButtonBanner/ButtonBanner";
import {
  calculateTotalSeconds,
  setDigitalClock,
} from "../Utilities/time_utility";

const optionsHours: number[] = Array.from(Array(6).keys());
const optionsMinutes: number[] = Array.from(Array(60).keys());
const optionsSeconds: number[] = Array.from(Array(60).keys());

const TimeSelector: FunctionComponent = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);
  const [hasCountdownStarted, setHasCountdownStarted] = useState(false);

  const startCountdown = () => {
    if (totalSeconds > 0) {
      const intervalID: NodeJS.Timeout = setInterval(
        () => setTotalSeconds((totalSeconds) => totalSeconds - 1),
        1000
      );
      intervalRef.current = intervalID;
      setHasCountdownStarted(true);
      return () => clearInterval(intervalID);
    }
  };

  const pauseCountdown = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
  };

  const resetInputValues = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const resetCountdown = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setHasCountdownStarted(false);

    setTotalSeconds(0);
    resetInputValues();
  };

  /**
   * sets and updates time */
  useEffect(() => {
    setTotalSeconds(calculateTotalSeconds(hours, minutes, seconds));
  }, [hours, minutes, seconds]);

  return (
    <>
      {/* Clock */}
      <Container>{setDigitalClock(totalSeconds)}</Container>
      <br></br>
      <TextField
        id="hours"
        data-testid="menu-items-hours"
        variant="outlined"
        defaultValue={0}
        value={hours}
        label="Hours"
        onChange={(event) => setHours(parseInt(event.target.value))}
        select
      >
        {optionsHours.map((option, id) => (
          <MenuItem
            key={option}
            value={option}
            data-testid={`menu-item-hours-${id}`}
          >
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

      <ButtonBanner
        startCountdown={startCountdown}
        pauseCountdown={pauseCountdown}
        resetCountdown={resetCountdown}
        hasCountdownStarted={hasCountdownStarted}
      ></ButtonBanner>
    </>
  );
};

export default TimeSelector;
