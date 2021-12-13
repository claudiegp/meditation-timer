import { Container } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { setDigitalClock } from "../Utilities/time_utility";

interface ClockProps {
  totalSeconds: number;
}

export const Clock: FunctionComponent<ClockProps> = ({ totalSeconds }) => {
  return <Container>{setDigitalClock(totalSeconds)}</Container>;
};
