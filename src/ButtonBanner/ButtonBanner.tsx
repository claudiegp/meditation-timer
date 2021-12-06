import { Button, ButtonGroup, Container } from "@material-ui/core";
import React, { FunctionComponent } from "react";

interface ButtonBannerProps {
  startCountdown: () => void;
  pauseCountdown: () => void;
  resetCountdown: () => void;
}

const ButtonBanner: FunctionComponent<ButtonBannerProps> = ({
  resetCountdown,
  pauseCountdown,
  startCountdown,
}) => (
  <Container>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={resetCountdown}>Reset</Button>
      <Button onClick={pauseCountdown}>Pause</Button>
      <Button onClick={startCountdown}>Start</Button>
    </ButtonGroup>
  </Container>
);

export default ButtonBanner;
