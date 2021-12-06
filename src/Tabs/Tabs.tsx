import React, { FunctionComponent, useState } from "react";

import { Tab, Tabs as TabGroup } from "@material-ui/core";

export const Tabs: FunctionComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    // todo: add type for event
    setValue(newValue);
  };
  return (
    <TabGroup className="Tab-group" value={value} onChange={handleChange}>
      <Tab id="Timer" label="Timer" />
      <Tab id="Stopwatch" label="Stopwatch" />
    </TabGroup>
  );
};
