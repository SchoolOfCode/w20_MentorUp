import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  mainLayout: {
    flexDirection: "column",
    alignContent: "'flex-start',",
    backgroundColor: "green",
    padding: "16px",
  },
  h1Override: {
    fontSize: "1.875rem",
  },
}));
function HomePage() {
  const classes = useStyles();
  return (
    <section style={{ padding: "16px" }}>
      <Grid container sm={9} className={classes.mainLayout} spacing={2}>
        <Grid item>
          <Typography variant="h1" className={classes.h1Override} gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="subtitle1">
            Tristique nunc phasellus consectetur.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" fullWidth>
            Sign up
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" fullWidth>
            Log in
          </Button>
        </Grid>
      </Grid>
    </section>
  );
}

export default HomePage;
