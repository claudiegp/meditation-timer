import React, { FunctionComponent } from "react";
import { Button, ButtonGroup, Container } from "@mui/material";
interface ButtonBannerProps {
  startCountdown: () => void;
  pauseCounter: () => void;
  resetCounter: () => void;
  hasCounterStarted: boolean;
  hasCounterPaused: boolean;
}

const ButtonBanner: FunctionComponent<ButtonBannerProps> = ({
  resetCounter,
  pauseCounter,
  startCountdown,
  hasCounterStarted,
  hasCounterPaused,
}) => (
  <Container>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={resetCounter} data-testid="reset-button">
        Reset
      </Button>
      {hasCounterStarted && (
        <Button
          onClick={hasCounterPaused ? startCountdown : pauseCounter}
          data-testid="pause-button"
        >
          Pause
        </Button>
      )}
      {!hasCounterStarted && (
        <Button onClick={startCountdown} data-testid="start-button">
          Start
        </Button>
      )}
    </ButtonGroup>
  </Container>
);

export default ButtonBanner;
