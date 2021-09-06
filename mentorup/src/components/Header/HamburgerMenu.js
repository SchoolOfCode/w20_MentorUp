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
        <MenuIcon />
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
            <img src={logo} alt="mentorup logo" />
          </Box>
          <Divider />
          <List>
            <ListItem>
              <Link to="/landing">
                <Button>Login/Sign-up</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/mentor-or-mentee">
                <Button>Mentor Or Mentee</Button>
              </Link>
            </ListItem>
          </List>
          <ListItem>
            <Link to="/bsl-selection">
              <Button>BSL Selection</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/language-selection">
              <Button>Language Selection</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/help-selection">
              <Button>Help Selection</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/industry-selection">
              <Button>Industry Selection</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/elevator-pitch">
              <Button>Elevator Pitch</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/contact">
              <Button>Contact Form</Button>
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
