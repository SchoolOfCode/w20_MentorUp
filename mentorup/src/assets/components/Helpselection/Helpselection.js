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
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        container
        direction="column"
        // justifyContent="center"
        // alignItems="space-between"
      >
        <Typography variant="h5" className={classes.ciao}>
          What do you need help with?
        </Typography>
        <TextField
          backgroundColor="red"
          className={classes.ciao}
          id="subject"
          label="Select a subject"
          select
          fullWidth
          spacing={2}
        >
          <MenuItem value="Select">Select an item</MenuItem>
          <MenuItem className={classes.hover} value="Pitching">
            Preparing a pitch
          </MenuItem>
          <MenuItem className={classes.hover} value="Business Plan">
            Business Plan
          </MenuItem>
          <MenuItem className={classes.hover} value="Dogs and Cats">
            Dogs and Cats
          </MenuItem>
          <MenuItem className={classes.hover} value="Airplaines">
            Airplaines
          </MenuItem>
        </TextField>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonResponsive}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}

export default Helpselection;
