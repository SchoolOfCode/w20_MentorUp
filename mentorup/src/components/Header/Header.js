import { AppBar, Toolbar } from "@material-ui/core";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  header: {
    height: "80px",
    justifyContent: "center",
    backgroundColor: "#FFAB40",
    color: "black",
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
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
