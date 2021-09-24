import React from "react";
import { Grid, MenuItem, TextField, Typography, Box } from "@material-ui/core";

function BusinessStage({
  businessStage,
  setBusinessStage,
  classes,
  yearsInBusiness,
  setYearsInBusiness,
}) {
  return (
    <div>
      <Box mb={3}>
        <Typography variant="h5" align="left">
          Business Stage
        </Typography>
      </Box>
      <Box mb={3}>
        <Grid item>
          <TextField
            fullWidth
            required
            select
            value={businessStage}
            onChange={(e) => setBusinessStage(e.target.value)}
            id="business_stage"
            label="What is your business stage?"
            style={{ paddingTop: "25px" }}
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
      </Box>

      <Grid item>
        <TextField
          fullWidth
          required
          type="number"
          value={yearsInBusiness}
          onChange={(e) => {
            e.target.value < 0
              ? (e.target.value = 0)
              : setYearsInBusiness(e.target.value);
          }}
          id="yearsinbusiness"
          label="How many years have you been in business?"
          style={{ paddingTop: "25px" }}
        />
      </Grid>
    </div>
  );
}
export default BusinessStage;
