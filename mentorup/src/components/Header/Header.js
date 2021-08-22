//Hamburger
//Logo
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuIcon,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <MenuIcon />
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
