import {
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
const useStyles = makeStyles((theme) => ({
  radio: {
    "&$checked": {
      backgroundColor: "#4B8DF8",
    },
  },
  checked: {},
}));
function MentorOrMentee() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h5">Create your profile</Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1">
          <FormControlLabel
            value="mentee"
            onChange
            classes={{ root: classes.radio, checked: classes.checked }}
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
    </div>
  );
}

export default MentorOrMentee;
