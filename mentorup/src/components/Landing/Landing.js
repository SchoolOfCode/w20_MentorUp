import { Button, Typography } from "@material-ui/core";
import React from "react";
import Header from "../Header/Header";
function Landing() {
  return (
    <div>
      <Header />
      <Typography variant="h5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Typography variant="h6">
        Tristique nunc phasellus consectetur.
      </Typography>
      <Button variant="contained" color="primary">
        Sign Up
      </Button>
      <Button variant="outlined" color="secondary">
        Log In
      </Button>
    </div>
  );
}

export default Landing;
