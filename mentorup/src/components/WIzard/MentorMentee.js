import { Typography, Grid, TextField, MenuItem } from "@material-ui/core";

import React from "react";
function MentorMentee({ menteeOrMentor, setMenteeOrMentor, classes }) {
  return (
    <div>
      <Grid item>
        <Typography variant="h5" align="left">
          Are you a Mentor or Mentee?
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          required
          select
          value={menteeOrMentor}
          onChange={(e) => setMenteeOrMentor(e.target.value)}
          id="mentor_mentee"
          label="Are you a Mentor or Mentee?"
        >
          <MenuItem value="Mentor" className={classes.hover}>
            Mentor
          </MenuItem>
          <MenuItem value="Mentee" className={classes.hover}>
            Mentee
          </MenuItem>
        </TextField>
      </Grid>
    </div>
  );
}
export default MentorMentee;
