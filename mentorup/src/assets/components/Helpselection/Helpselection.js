import React from "react";
import { InputLabel, MenuItem, TextField } from "@material-ui/core";
function Helpselection() {
  return (
    <div>
      <InputLabel id="subject">I need help with</InputLabel>
      <TextField id="subject" label="Select a subject" select>
        <MenuItem value="Pitching">Preparing a pitch</MenuItem>
        <MenuItem value="Business Plan">Business Plan</MenuItem>
        <MenuItem value="Business Plan">Business Plan</MenuItem>
        <MenuItem value="Business Plan">Business Plan</MenuItem>
      </TextField>
    </div>
  );
}

export default Helpselection;
