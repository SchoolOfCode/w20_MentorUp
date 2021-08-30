import React from "react";
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

function LanguageSelection() {
  return (
    <div>
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
              What language do you speak?
            </Typography>
            <Typography variant="h6" align="center">
              We will provide support for you
            </Typography>
          </Grid>

          <FormControl component="fieldset">
            <RadioGroup aria-label="mentorormentee" name="mentorormentee">
              <FormControlLabel
                value="English"
                control={<Radio />}
                label="English"
                labelPlacement="start"
                style={{
                  justifyContent: "space-between",
                  margin: "0",
                  padding: "16px",
                }}
              />
              <FormControlLabel
                value="French"
                control={<Radio />}
                label="French"
                labelPlacement="start"
                style={{
                  justifyContent: "space-between",
                  margin: "0",
                  padding: "16px",
                }}
              />
              <FormControlLabel
                value="Arabic"
                control={<Radio />}
                label="Arabic"
                labelPlacement="start"
                style={{
                  justifyContent: "space-between",
                  margin: "0",
                  padding: "16px",
                }}
              />
              <FormControlLabel
                value="Hindi"
                control={<Radio />}
                label="Hindi"
                labelPlacement="start"
                style={{
                  justifyContent: "space-between",
                  margin: "0",
                  padding: "16px",
                }}
              />
              <FormControlLabel
                value="Punjabi"
                control={<Radio />}
                label="Punjabi"
                labelPlacement="start"
                style={{
                  justifyContent: "space-between",
                  margin: "0",
                  padding: "16px",
                }}
              />
              <FormControlLabel
                value="Spanish"
                control={<Radio />}
                label="French"
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
    </div>
  );
}

export default LanguageSelection;
