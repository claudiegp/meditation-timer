import React, { FunctionComponent } from "react";

import { Tab, Tabs as TabGroup } from "@material-ui/core";

export const Tabs: FunctionComponent = () => (
  <TabGroup className="Tab-group">
    <Tab id="Timer" label="Timer" />
    <Tab id="Stopwatch" label="Stopwatch" />
  </TabGroup>
);
