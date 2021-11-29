import React from "react";
import logo from "../Assets/calm.png";

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" datatest-id="app-logo" />
    <p>Meditation Timer</p>
  </header>
);

export default Header;
