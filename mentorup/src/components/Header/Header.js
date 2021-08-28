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
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

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
          {/* <Logo /> */}
          <Typography variant="h6">MentorUP</Typography>
          <Link to="/landing">
            <Button color="inherit">Login/Sign-up</Button>
          </Link>
          <Link to="/contact">
            <Button color="inherit">Contact Form</Button>
          </Link>
          <Link to="/dashboard">
            <Button color="inherit">Dashboard</Button>
          </Link>
          <Link to="/match-with-mentor">
            <Button color="inherit">Match with a Mentor</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
