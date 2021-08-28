import React from "react";
import {
  Grid,
  Box,
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
  buttonResponsive: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  hover: {
    "&:hover, &:focus": {
      background: "#3F51B5",
      color: "#000",
      "&:before": {
        background: "#8a4baf",
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
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h5" className={classes.ciao}>
          What do you need help with?
        </Typography>
        <TextField
          className={classes.ciao}
          // className={classes.root}
          id="subject"
          label="Select a subject"
          select
          fullWidth
        >
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
        <Button variant="contained" color="primary" fullWidth>
          Next
        </Button>
      </Grid>
    </Grid>
  );
}

export default Helpselection;
