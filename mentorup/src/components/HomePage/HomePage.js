import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import heroImage from "../../assets/heroimage.jpg";
import dummy1 from "../../assets/undraw_fall_thyk.svg";
import dummy2 from "../../assets/undraw_my_app_re_gxtj.svg";
import dummy3 from "../../assets/undraw_step_to_the_sun_nxqq.svg";
import { spacing } from "@material-ui/system";
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
function HomePage() {
  const classes = useStyles();
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
            <Grid
              item
              container
              sm={12}
              md={4}
              justifyContent="center"
              style={{ padding: "24px" }}
            >
              <Typography variant="h6">Step 1: Blabla</Typography>
              <img
                src={dummy1}
                style={{ maxWidth: "100%", alignSelf: "center" }}
                alt="dummy"
              />
            </Grid>
            <Grid
              item
              container
              sm={12}
              md={4}
              justifyContent="center"
              style={{ padding: "24px" }}
            >
              <Typography variant="h6">Step 1: Blabla</Typography>
              <img
                src={dummy1}
                style={{ maxWidth: "100%", alignSelf: "center" }}
                alt="dummy"
              />
            </Grid>
            <Grid
              item
              container
              sm={12}
              md={4}
              justifyContent="center"
              style={{ padding: "24px" }}
            >
              <Typography variant="h6">Step 1: Blabla</Typography>
              <img
                src={dummy1}
                style={{ maxWidth: "100%", alignSelf: "center" }}
                alt="dummy"
              />
            </Grid>
          </Grid>
        </Grid>
      </section>
    </main>
  );
}

export default HomePage;
