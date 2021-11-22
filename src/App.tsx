import React from "react";
import logo from "./lotus.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          datatest-id="app-logo"
        />
        <p>Lotus Timer</p>
      </header>
    </div>
  );
}

export default App;
