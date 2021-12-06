import { Button, ButtonGroup, Container } from "@material-ui/core";
import React, { FunctionComponent } from "react";

interface ButtonBannerProps {
  startCountdown: () => void;
  pauseCountdown: () => void;
  resetCountdown: () => void;
  hasCountdownStarted: boolean;
}

const ButtonBanner: FunctionComponent<ButtonBannerProps> = ({
  resetCountdown,
  pauseCountdown,
  startCountdown,
  hasCountdownStarted,
}) => (
  <Container>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={resetCountdown} data-testid="reset-button">
        Reset
      </Button>
      {hasCountdownStarted && (
        <Button onClick={pauseCountdown} data-testid="pause-button">
          Pause
        </Button>
      )}
      {!hasCountdownStarted && (
        <Button onClick={startCountdown} data-testid="start-button">
          Start
        </Button>
      )}
    </ButtonGroup>
  </Container>
);

export default ButtonBanner;
