import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import "./App.css";
import "./Timer.css";
import { Container } from "@mui/material";
import { Tabs } from "./Tabs/Tabs";
import Header from "./Header/Header";
import TimeSelector from "./TimeSelector/TimeSelector";
import { Clock } from "./Clock/Clock";
import ButtonBanner from "./ButtonBanner/ButtonBanner";
import { calculateTotalSeconds } from "./Utilities/time_utility";

export default function App(): JSX.Element {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [clockType, setClockType] = useState("timer");
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [hasCounterStarted, setHasCounterStarted] = useState<boolean>(false);
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);
  const [hasCounterPaused, setHasCounterPaused] = useState<boolean>(false);

  /* sets and updates time */
  useEffect(() => {
    setTotalSeconds(calculateTotalSeconds(hours, minutes, seconds));
  }, [hours, minutes, seconds]);

  const handleHoursChange = (event: any) => {
    setHours(parseInt(event.target.value));
  };

  const handleMinutesChange = (event: any) => {
    setMinutes(parseInt(event.target.value));
  };

  const handleSecondsChange = (event: any) => {
    setSeconds(parseInt(event.target.value));
  };

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

  const handleTabChange = (event: any, clockType: string) => {
    setClockType(clockType);
    resetCounter();
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <Tabs clockType={clockType} onChange={handleTabChange} />
        <br></br>
        <Clock totalSeconds={totalSeconds} />

        {clockType === "timer" && (
          <TimeSelector
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            handleHoursChange={handleHoursChange}
            handleMinutesChange={handleMinutesChange}
            handleSecondsChange={handleSecondsChange}
          />
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
      </Container>
    </div>
  );
}
