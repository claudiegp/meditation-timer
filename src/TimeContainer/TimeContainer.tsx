import React, { FunctionComponent } from "react";
import TimeSelector from "../TimeSelector/TimeSelector";

interface TimeContainerProps {
  clockType: string;
}

const TimeContainer: FunctionComponent<TimeContainerProps> = ({
  clockType,
}) => {
  return <TimeSelector clockType={clockType} />;
};

export default TimeContainer;
