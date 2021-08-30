import React from "react";
import {
  Grid,
  MenuItem,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
// const useStyles = makeStyles({
//   field: {
//     marginBottom: 20,
//   },
// });
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    // width: "30ch",
    backgroundColor: "red",
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
}));
function Helpselection() {
  const classes = useStyles();
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
            What do you need help with?
          </Typography>
        </Grid>
        <Grid item>
          <TextField id="subject" label="Select a subject" select fullWidth>
            <MenuItem value="Select">Select an item</MenuItem>
            <MenuItem value="Pitching" className={classes.hover}>
              Preparing a pitch
            </MenuItem>
            <MenuItem value="Business Plan" className={classes.hover}>
              Business Plan
            </MenuItem>
            <MenuItem value="Dogs and Cats" className={classes.hover}>
              Dogs and Cats
            </MenuItem>
            <MenuItem value="Airplaines" className={classes.hover}>
              Airplaines
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" fullWidth>
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Helpselection;
