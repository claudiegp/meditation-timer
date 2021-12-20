import { Typography } from "@mui/material";
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
    <Typography
      variant="h5"
      gutterBottom
      component="div"
      color={"black"}
      data-testid="header-title"
    >
      Meditation Timer
    </Typography>
  </header>
);

export default Header;
