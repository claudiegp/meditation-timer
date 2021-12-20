import { TextField, MenuItem } from "@material-ui/core";
// todo update to use MUI
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import ButtonBanner from "../ButtonBanner/ButtonBanner";
import { Clock } from "../Clock/Clock";
import { calculateTotalSeconds } from "../Utilities/time_utility";

const optionsHours: number[] = Array.from(Array(6).keys());
const optionsMinutes: number[] = Array.from(Array(60).keys());
const optionsSeconds: number[] = Array.from(Array(60).keys());

interface TimeSelectorProps {
  clockType: string;
}

const TimeSelector: FunctionComponent<TimeSelectorProps> = ({ clockType }) => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);

  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);
  const [hasCounterStarted, setHasCounterStarted] = useState<boolean>(false);
  const [hasCounterPaused, setHasCounterPaused] = useState<boolean>(false);

  const startCountdown = () => {
    if (clockType === "timer" && totalSeconds > 0) {
      const intervalID: NodeJS.Timeout = setInterval(
        () => setTotalSeconds((totalSeconds: number) => totalSeconds - 1),
        1000
      );
      intervalRef.current = intervalID;
      setHasCounterStarted(true);
      setHasCounterPaused(false);

      return () => clearInterval(intervalID);
    }
  };

  const startCountup = () => {
    const intervalID: NodeJS.Timeout = setInterval(
      () => setTotalSeconds((totalSeconds: number) => totalSeconds + 1),
      1000
    );
    intervalRef.current = intervalID;
    setHasCounterStarted(true);

    if (totalSeconds === 3599) {
      pauseCounter();
    }

    return () => clearInterval(intervalID);
  };

  const pauseCounter = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setHasCounterPaused(true);
  };

  const resetInputValues = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const resetCounter = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setHasCounterStarted(false);

    setTotalSeconds(0);
    resetInputValues();
  };

  /* sets and updates time */
  useEffect(() => {
    setTotalSeconds(calculateTotalSeconds(hours, minutes, seconds));
  }, [hours, minutes, seconds]);

  return (
    <>
      <Clock totalSeconds={totalSeconds} />
      <br></br>

      {clockType === "timer" && (
        <>
          <TextField
            id="hours"
            data-testid="menu-items-hours"
            variant="filled"
            defaultValue={0}
            value={hours}
            label="Hours"
            onChange={(event) => setHours(parseInt(event.target.value))}
            select
            color={"primary"}
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
            data-testid="menu-items-minutes"
            variant="filled"
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
            data-testid="menu-items-seconds"
            variant="filled"
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
      )}

      {clockType === "timer" && (
        <ButtonBanner
          startCountdown={startCountdown}
          pauseCounter={pauseCounter}
          resetCounter={resetCounter}
          hasCounterStarted={hasCounterStarted}
          hasCounterPaused={hasCounterPaused}
        ></ButtonBanner>
      )}

      {clockType === "stopwatch" && (
        <ButtonBanner
          startCountdown={startCountup}
          pauseCounter={pauseCounter}
          resetCounter={resetCounter}
          hasCounterStarted={hasCounterStarted}
          hasCounterPaused={hasCounterPaused}
        ></ButtonBanner>
      )}
    </>
  );
};

export default TimeSelector;
