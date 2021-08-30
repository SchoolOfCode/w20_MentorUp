import {
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import React from "react";

function MentorOrMentee() {
  return (
    <div>
      <Typography variant="h5">Create your profile</Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1">
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
      </FormControl>
    </div>
  );
}

export default MentorOrMentee;
