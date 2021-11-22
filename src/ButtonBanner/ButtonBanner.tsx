import { Button, ButtonGroup } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const ButtonBanner: FunctionComponent = () => (
  <ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button>Reset</Button>
    <Button>Start</Button>
  </ButtonGroup>
);

export default ButtonBanner;
