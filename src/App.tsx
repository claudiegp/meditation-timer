import React from "react";
import "./App.css";
import "./Timer.css";
import { Container as TimerContainer } from "@material-ui/core";
import { Tabs } from "./Tabs/Tabs";
import TimeContainer from "./TimeContainer/TimeContainer";
import Header from "./Header/Header";
import ButtonBanner from "./ButtonBanner/ButtonBanner";

function App() {
  return (
    <div className="App">
      <Header />
      <TimerContainer className="Timer-container">
        <Tabs />
        <TimeContainer />
        <ButtonBanner />
      </TimerContainer>
    </div>
  );
}

export default App;
