import React, { FunctionComponent } from "react";
import { Button, ButtonGroup } from "@mui/material";
interface ButtonBannerProps {
  startCounter: () => void;
  pauseCounter: () => void;
  resetCounter: () => void;
  isCounting: boolean;
}

const ButtonBanner: FunctionComponent<ButtonBannerProps> = ({
  resetCounter,
  pauseCounter,
  startCounter,
  isCounting,
}) => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={resetCounter} data-testid="reset-button">
        Reset
      </Button>
      {isCounting ? (
        <Button onClick={pauseCounter} data-testid="pause-button">
          Pause
        </Button>
      ) : (
        <Button onClick={startCounter} data-testid="start-button">
          Start
        </Button>
      )}
    </ButtonGroup>
  );
};

export default ButtonBanner;
