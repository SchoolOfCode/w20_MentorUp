import { useState } from "react";
import {
  IconButton,
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  Divider,
  Box,
} from "@material-ui/core";

import logo from "../../assets/logo.svg";

import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton
        data-testid="icon-button"
        edge="start"
        color="inherit"
        aria-label="open menu"
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon style={{ fontSize: "1.9rem" }} />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {
          setOpen(true);
        }}
      >
        <div>
          <Box
            textAlign="center"
            p={2}
            style={{
              width: 250,
              height: "54px",
              padding: "13px 0",
            }}
            elevation={4}
          >
            <Link to="/">
              <img src={logo} alt="mentorup logo" />
            </Link>
          </Box>
          <Divider />
          <List>
            <ListItem>
              <Link to="/landing">
                <Button>Login/Sign-up</Button>
              </Link>
            </ListItem>
          </List>
          <ListItem>
            <Link to="/user-profile">
              <Button>My Profile details</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/match-with-mentor">
              <Button>Match with a Mentor</Button>
            </Link>
          </ListItem>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default HamburgerMenu;
