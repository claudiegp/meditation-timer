import React, { useState } from "react";
import "./App.css";
import "./Timer.css";
import { Container } from "@material-ui/core";
import { Tabs } from "./Tabs/Tabs";
import TimeContainer from "./TimeContainer/TimeContainer";
import Header from "./Header/Header";

export default function App(): JSX.Element {
  const [clockType, setClockType] = useState("timer");

  const handleChange = (event: any, clockType: string) => {
    // todo: add type for event
    setClockType(clockType);
  };

  return (
    <div className="App">
      <Header />
      <Container className="Box">
        <Tabs clockType={clockType} onChange={handleChange} />
        <TimeContainer clockType={clockType} />
      </Container>
    </div>
  );
}
