import { Container, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { setDigitalClock } from "../Utilities/time_utility";

interface ClockProps {
  totalSeconds: number;
}

export const Clock: FunctionComponent<ClockProps> = ({ totalSeconds }) => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom component="div" color={"black"}>
        {setDigitalClock(totalSeconds)}
      </Typography>
    </Container>
  );
};
