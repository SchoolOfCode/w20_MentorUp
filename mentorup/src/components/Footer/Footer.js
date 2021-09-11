import React from "react";
import logo from "../../assets/logo.svg";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
function Footer() {
  return (
    <footer>
      <Box>
        <Grid
          container
          style={{ backgroundColor: "#FCFCFC", height: "250px" }}
          flexDirection="column"
        >
          <Grid item container xs={12} justifyContent="center">
            <img src={logo} alt="logo" />
          </Grid>

          <Grid item xs={6}>
            <Box px={2}>
              <Typography>MentorUp</Typography>
              <Typography>&#169; 2021</Typography>
            </Box>
          </Grid>

          <Grid container xs={6} justifyContent="center" align="center">
            <Grid item xs={3}>
              <InstagramIcon fontSize="large" />
            </Grid>
            <Grid item xs={3}>
              <TwitterIcon fontSize="large" />
            </Grid>
            <Grid item xs={3}>
              <FacebookIcon fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
