//Hamburger
//Logo

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Logo from "../../assets/logo.svg";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <HamburgerMenu />
          <Typography variant="h6">MentorUP</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
