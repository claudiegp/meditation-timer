import React from "react";
import logo from "../Assets/calm.png";

const Header = () => (
  <header className="App-header">
    <img
      src={logo}
      className="App-logo"
      alt="logo"
      data-testid="app-logo"
      id="logo"
    />
    <p data-testid="header-title">Meditation Timer</p>
  </header>
);

export default Header;
