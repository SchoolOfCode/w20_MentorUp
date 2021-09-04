//Hamburger
//Logo

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Logo from "../../assets/logo.svg";
import HamburgerMenu from "./HamburgerMenu";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  header: {
    height: "80px",
    justifyContent: "center",
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <HamburgerMenu />
          <Typography variant="h6">MentorUP</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
