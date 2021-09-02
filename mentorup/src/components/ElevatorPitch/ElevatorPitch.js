import React from "react";
import {
  Typography,
  FormControl,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
  },
});
function ElevatorPitch() {
  const classes = useStyles();
  return (
    <Grid
      style={{
        margin: "0 auto",
      }}
      xs={10}
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
          <Typography variant="h5" align="center" gutterBottom>
            Elevator Pitch
          </Typography>
          <Typography align="center" gutterBottom>
            Write your elevator pitch here
          </Typography>
        </Grid>
        <FormControl>
          <TextField
            className={classes.field}
            variant="outlined"
            label="Write your elevator pitch here"
            multiline
            rows={4}
          />

          <Button variant="contained" color="primary" fullWidth>
            Next
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default ElevatorPitch;
