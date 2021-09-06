import React from "react";
import { Grid, Typography } from "@material-ui/core";
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
    <Grid container sm={9} className={classes.mainLayout}>
      <Typography variant="h1" className={classes.h1Override} gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Typography variant="subtitle1">
        Tristique nunc phasellus consectetur.
      </Typography>
    </Grid>
  );
}

export default HomePage;
