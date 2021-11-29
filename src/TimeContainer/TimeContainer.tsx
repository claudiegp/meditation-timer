import { Container } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import TimeSelector from "../TimeSelector/TimeSelector";

const TimeContainer: FunctionComponent = () => {
  return (
    <Container>
      {/* <form> */}
      <TimeSelector />
      {/* <TimeSelector time="minutes"/> */}
      {/* <TimeSelector time="seconds"/> */}
      {/* </form> */}
    </Container>
  );
};

export default TimeContainer;
