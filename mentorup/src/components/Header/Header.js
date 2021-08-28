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
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
          <Link to="/contact">
            <Button color="inherit">Contact Form</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
