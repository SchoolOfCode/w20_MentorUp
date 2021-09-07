import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import heroImage from "../../assets/heroimage.jpg";
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
}));
function HomePage() {
  const classes = useStyles();
  return (
    <main style={{ padding: "16px" }}>
      <section>
        <Grid
          container
          //   sm={4}
          //   md={6}
          className={classes.mainLayout}
          spacing={2}
        >
          <Grid item container xs={12} sm={4} style={{ alignItems: "center" }}>
            <Grid item>
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
          <Grid item xs={12} sm={8}>
            <img
              src={heroImage}
              alt="hero"
              style={{ maxWidth: "400px", width: "100%" }}
            />
          </Grid>
        </Grid>
      </section>
      <section>
        <Grid container>Hello</Grid>
      </section>
    </main>
  );
}

export default HomePage;
