import React from "react";
import {
  Box,
  MenuItem,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
function Helpselection() {
  return (
    <Box component="div" width={300} display="flex" flexDirection="column">
      <Typography variant="h5"> What do you need help with?</Typography>

      <TextField id="subject" label="Select a subject" select>
        <MenuItem value="Pitching">Preparing a pitch</MenuItem>
        <MenuItem value="Business Plan">Business Plan</MenuItem>
        <MenuItem value="Business Plan">Business Plan</MenuItem>
        <MenuItem value="Business Plan">Business Plan</MenuItem>
      </TextField>
      <Button variant="contained" color="primary">
        Next
      </Button>
    </Box>
  );
}

export default Helpselection;
