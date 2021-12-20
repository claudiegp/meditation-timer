import { Container, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { setDigitalClock } from "../Utilities/time_utility";

interface ClockProps {
  totalSeconds: number;
}

export const Clock: FunctionComponent<ClockProps> = ({ totalSeconds }) => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom component="div">
        {setDigitalClock(totalSeconds)}
      </Typography>
    </Container>
  );
};
