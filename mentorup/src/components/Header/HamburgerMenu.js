import { useState } from "react";
import {
  IconButton,
  Typography,
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  Divider,
  Box,
} from "@material-ui/core";
import Logo from "../../assets/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton
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
          <Box textAlign="center" p={2} style={{ width: 250 }}>
            <Typography variant="h6">MentorUP</Typography>
          </Box>
          <Divider />
          <List>
            <ListItem>
              <Link to="/landing">
                <Button>Login/Logout</Button>
              </Link>
            </ListItem>
          </List>
          <ListItem>
            <Link to="/user-details">
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
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default HamburgerMenu;
