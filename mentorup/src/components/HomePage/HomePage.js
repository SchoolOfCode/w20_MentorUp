import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import heroImage from "../../assets/heroimage.jpg";
const useStyles = makeStyles((theme) => ({
  mainLayout: {
    flexDirection: "column",
    alignContent: "'flex-start',",
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
    <section style={{ padding: "16px" }}>
      <Grid container xs={12} sm={9} className={classes.mainLayout} spacing={2}>
        <Grid item>
          <Typography variant="h1" className={classes.h1Override} gutterBottom>
            Kickstart your startup with a kickass mentor
          </Typography>
          <Typography variant="subtitle1">
            Get an experienced mentor in your same field of business!
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
        <Grid item>
          <img src={heroImage} alt="hero image" style={{ maxWidth: "100%" }} />
        </Grid>
      </Grid>
    </section>
  );
}

export default HomePage;
