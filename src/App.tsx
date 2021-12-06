import React from "react";
import "./App.css";
import "./Timer.css";
import { Container } from "@material-ui/core";
import { Tabs } from "./Tabs/Tabs";
import TimeContainer from "./TimeContainer/TimeContainer";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="Box">
        <Tabs />
        <TimeContainer />
      </Container>
    </div>
  );
}

export default App;
