import {
  Typography,
  FormControl,
  withStyles,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Grid,
} from "@material-ui/core";

import React from "react";

function MentorOrMentee() {
  // const classes = useStyles();
  return (
    <Grid
      style={{
        margin: "0 auto",
      }}
      sm={6}
      md={3}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        container
        direction="column"
        spacing={4}
        // justifyContent="center"
        // alignItems="space-between"
      >
        <Grid item>
          <Typography variant="h5" align="center">
            Create your profile
          </Typography>
        </Grid>

        <FormControl component="fieldset">
          <RadioGroup aria-label="mentorormentee" name="mentorormentee">
            <FormControlLabel
              value="mentee"
              control={<Radio />}
              label="I need a mentor"
            />
            <FormControlLabel
              value="mentor"
              control={<Radio />}
              label="I want to be a mentor"
            />
          </RadioGroup>
          <Button variant="contained" color="primary" fullWidth>
            Next
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default MentorOrMentee;
