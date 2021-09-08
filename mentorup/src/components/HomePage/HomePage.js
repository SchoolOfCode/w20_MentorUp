import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
// import { Button, Icon, Divider, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import heroImage from "../../assets/heroimage.jpg";
import logo from "../../assets/logo.svg";
import dummy1 from "../../assets/undraw_fall_thyk.svg";
import dummy2 from "../../assets/undraw_my_app_re_gxtj.svg";
import dummy3 from "../../assets/undraw_step_to_the_sun_nxqq.svg";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  mainLayout: {
    // flexDirection: "column",
    // backgroundColor: "green",
    padding: "16px",
  },
  h1Override: {
    fontSize: "1.875rem",
    fontWeight: "medium",
  },
  heroText: {
    [theme.breakpoints.up("sm")]: {
      padding: "24px 64px",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      padding: "96px 64px",
      alignItems: "center",
    },
  },
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiTypography-h1": {
      [theme.breakpoints.up("xs")]: {
        fontSize: "2.375rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.9167rem",
      },
    },
  },
}));
const howItWorksSteps = [
  { step: 1, text: "Sign up", image: dummy1 },
  { step: 2, text: "Fill out form", image: dummy2 },
  { step: 3, text: "Match with mentor!", image: dummy3 },
];
function HomePage() {
  const classes = useStyles();
  console.log(howItWorksSteps[0].image2);
  return (
    <main style={{ padding: "16px" }}>
      <section>
        <Grid container className={classes.mainLayout} spacing={2}>
          <Grid
            container
            xs={12}
            sm={12}
            md={6}
            spacing={2}
            className={classes.heroText}
          >
            <Grid item container>
              <Typography
                variant="h1"
                className={classes.h1Override}
                gutterBottom
              >
                Kickstart your startup with a kickass mentor
              </Typography>
              <Typography variant="h6">
                Get an experienced mentor in your same field of business! Get an
                experienced mentor in your same field of business!
              </Typography>
            </Grid>
            <Grid item container xs={12}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Sign up
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  fullWidth
                >
                  Log in
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={12} md={6}>
            <img
              src={heroImage}
              alt="hero"
              style={{ maxWidth: "100%", alignSelf: "center" }}
            />
          </Grid>
        </Grid>
      </section>
      <Divider />
      <section>
        <Grid
          container
          xs={12}
          sm={12}
          //   md={6}
          justifyContent="center"
          style={{ margin: "0 auto", background: "blanchedalmond" }}
          className={classes.heroText}
          spacing={3}
        >
          <Grid item container xs={12} justifyContent="center">
            <Typography variant="h4">How it works</Typography>
          </Grid>
          <Grid container>
            {howItWorksSteps.map((item, index) => {
              return (
                <Grid
                  item
                  container
                  sm={12}
                  md={4}
                  justifyContent="center"
                  style={{ padding: "24px" }}
                >
                  <Typography variant="h5" gutterBottom>
                    Step {item.step}: {item.text}
                  </Typography>
                  <img
                    src={item.image}
                    style={{ maxWidth: "100%", alignSelf: "center" }}
                    alt={item.text}
                  />
                  ;
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </section>
      <Divider />
      <footer>
        <Box>
          <Container>
            <Grid
              container
              style={{ backgroundColor: "#FCFCFC", height: "250px" }}
              flexDirection="column"
            >
              <Grid item container xs={12} justifyContent="center">
                <img src={logo} alt="logo" />
              </Grid>
              <Grid item xs={6}>
                <Typography>MentorUp</Typography>
                <Typography>&#169; 2021</Typography>
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
          </Container>
        </Box>
      </footer>
    </main>
  );
}

export default HomePage;
