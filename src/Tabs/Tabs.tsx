import React, { FunctionComponent } from "react";
import { Tab, Tabs as TabGroup } from "@mui/material";

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
      indicatorColor="primary"
      aria-label="tabs with options"
    >
      <Tab
        id="Timer"
        label="Timer"
        value="timer"
        aria-label="tab for timer"
        data-testid="timer-tab"
      />
      <Tab
        id="Stopwatch"
        label="Stopwatch"
        value="stopwatch"
        aria-label="tab for stopwatch"
        data-testid="stopwatch-tab"
      />
    </TabGroup>
  );
};
