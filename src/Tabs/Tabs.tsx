import React, { FunctionComponent } from "react";

import { Tab, Tabs as TabGroup } from "@material-ui/core";

interface TabsProps {
  clockType: string;
  onChange: (e: any, clockType: string) => void;
}

export const Tabs: FunctionComponent<TabsProps> = ({ clockType, onChange }) => {
  return (
    <TabGroup
      className="Tab-group"
      value={clockType}
      onChange={onChange}
      centered
    >
      <Tab id="Timer" label="Timer" value="timer" />
      <Tab id="Stopwatch" label="Stopwatch" value="stopwatch" />
    </TabGroup>
  );
};
