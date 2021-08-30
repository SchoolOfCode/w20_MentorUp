import React from "react";
import {
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Grid,
} from "@material-ui/core";

function BSLSelection() {
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
            Do you need a British Sign Language interpreter?
          </Typography>
        </Grid>

        <FormControl component="fieldset">
          <RadioGroup aria-label="mentorormentee" name="mentorormentee">
            <FormControlLabel
              value="Yes"
              control={<Radio />}
              label="Yes"
              labelPlacement="start"
              style={{
                justifyContent: "space-between",
                margin: "0",
                padding: "16px",
              }}
            />
            <FormControlLabel
              value="No"
              control={<Radio />}
              label="No"
              labelPlacement="start"
              style={{
                justifyContent: "space-between",
                margin: "0",
                padding: "16px",
              }}
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

export default BSLSelection;
