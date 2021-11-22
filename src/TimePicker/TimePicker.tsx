import { Container, TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const TimePicker: FunctionComponent = () => {
  return (
    <Container>
      <TextField
        id="standard-basic"
        className="hours"
        label="0h"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        className="minutes"
        label="0m"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        className="seconds"
        label="0s"
        variant="standard"
      />
    </Container>
  );
};

export default TimePicker;
