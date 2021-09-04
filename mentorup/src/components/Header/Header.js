//Hamburger
//Logo

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logo from "../../assets/logo.svg";
import HamburgerMenu from "./HamburgerMenu";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  header: {
    height: "80px",
    justifyContent: "center",
  },
  logoCentre: {
    width: "calc(100% - 68px)",
    display: "flex",
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
          <div className={classes.logoCentre}>
            <img src={logo} alt="logo" />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
