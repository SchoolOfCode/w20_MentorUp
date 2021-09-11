import React, { useState } from "react";
import {
  Grid,
  MenuItem,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    // width: "30ch",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxHeight: 150,
    maxWidth: 150,
  },
  ciao: {
    marginBottom: theme.spacing(3),
  },
  hover: {
    "&:hover, &:focus": {
      background: "#3F51B5",
      color: "#000",
      "&:before": {
        background: "#5767BE",
        transform: "scale(1)",
      },
    },
  },
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
function BusinessStage({
  businessStage,
  setBusinessStage,
  classes,
  yearsInBusiness,
  setYearsInBusiness,
}) {
  return (
    <div>
      <Grid item>
        <Typography variant="h5" align="left">
          Business Stage
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          required
          select
          value={businessStage}
          onChange={(e) => setBusinessStage(e.target.value)}
          id="business_stage"
          label="What is your business stage?"
        >
          <MenuItem value="Pre-launch" className={classes.hover}>
            Pre-launch
          </MenuItem>
          <MenuItem value="Startup" className={classes.hover}>
            Startup
          </MenuItem>
          <MenuItem value="Active" className={classes.hover}>
            Active
          </MenuItem>
        </TextField>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          required
          type="number"
          value={yearsInBusiness}
          onChange={(e) => setYearsInBusiness(e.target.value)}
          id="yearsinbusiness"
          label="How many years have you been in business?"
        />
      </Grid>
    </div>
  );
}
export default BusinessStage;
