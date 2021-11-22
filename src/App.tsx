import React from "react";
import "./App.css";
import "./Timer.css";
import { Container as TimerContainer } from "@material-ui/core";
import { Tabs } from "./Tabs/Tabs";
import TimePicker from "./TimePicker/TimePicker";
import Header from "./Header/Header";
import ButtonBanner from "./ButtonBanner/ButtonBanner";

function App() {
  return (
    <div className="App">
      <Header />
      <TimerContainer className="Box">
        <Tabs />
        <TimePicker />
        <ButtonBanner />
      </TimerContainer>
    </div>
  );
}

export default App;
