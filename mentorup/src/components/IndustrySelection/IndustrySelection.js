import React from "react";
import {
  Box,
  MenuItem,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
function Industryselection() {
  return (
    <Box component="div" width={300} display="flex" flexDirection="column">
      <Typography variant="h5"> What do you need help with?</Typography>

      <TextField id="subject" label="Select an industry" select>
        <MenuItem value="Agriculture">Agriculture</MenuItem>
        <MenuItem value="Bars & Restaurants">Bars & Restaurants</MenuItem>
        <MenuItem value="Cattle Ranchers/Livestock">
          Cattle Ranchers/Livestock
        </MenuItem>
        <MenuItem value="Entertainment Industry">
          Entertainment Industry
        </MenuItem>
      </TextField>
      <Button variant="contained" color="primary">
        Next
      </Button>
    </Box>
  );
}

export default Industryselection;
