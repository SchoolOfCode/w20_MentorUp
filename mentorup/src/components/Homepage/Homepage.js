import { Typography } from "@material-ui/core";
import React from "react";

function Homepage() {
  return (
    <div>
      <Typography variant="h5">
        Welcome to MentorUp, the platform that will match you with a mentor to
        kickstart your business.{" "}
      </Typography>
      <Typography variant="h6">
        You will be matched with a mentor that has an expertise in your field of
        need and whom business is in a similar stage as yours.
      </Typography>
    </div>
  );
}

export default Homepage;
