import React, { FunctionComponent } from "react";
import { Button, ButtonGroup } from "@mui/material";
interface ButtonBannerProps {
  startCounter: () => void;
  pauseCounter: () => void;
  resetCounter: () => void;
  hasCounterStarted: boolean;
  hasCounterPaused: boolean;
}

const ButtonBanner: FunctionComponent<ButtonBannerProps> = ({
  resetCounter,
  pauseCounter,
  startCounter,
  hasCounterStarted,
  hasCounterPaused,
}) => {
  console.log({ hasCounterStarted, hasCounterPaused });

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={resetCounter} data-testid="reset-button">
        Reset
      </Button>
      {hasCounterStarted && (
        <Button
          onClick={hasCounterPaused ? startCounter : pauseCounter}
          data-testid="pause-button"
        >
          Pause
        </Button>
      )}
      {!hasCounterStarted && (
        <Button onClick={startCounter} data-testid="start-button">
          Start
        </Button>
      )}
    </ButtonGroup>
  );
};

export default ButtonBanner;
