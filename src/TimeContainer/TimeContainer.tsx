import React, { FunctionComponent } from "react";
import TimeSelector from "../TimeSelector/TimeSelector";

interface TimeContainerProps {
  clockType: string;
}

const TimeContainer: FunctionComponent<TimeContainerProps> = ({
  clockType,
}) => {
  if (clockType === "timer") {
    return <TimeSelector clockType={clockType} />;
  }

  if (clockType === "stopwatch") {
    return <TimeSelector clockType={clockType} />;
  }

  return <>Select a clock type</>;
};

export default TimeContainer;
