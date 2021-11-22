import { Container } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import TimeSelector from "../TimeSelector/TimeSelector";

const TimePicker: FunctionComponent = () => {
  return (
    <Container>
      <TimeSelector />
    </Container>
  );
};

export default TimePicker;
