import React from "react";
import {
  Box,
  MenuItem,
  TextField,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
// component="div" width={300} display="flex" flexDirection="column"
function Industryselection() {
  return (
    <Grid container spacing={3} backgroundColor: "red">
      <Grid item>
        <Box>
          <Typography variant="h5"> What do you need helh?</Typography>

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
      </Grid>
    </Grid>
  );
}

export default Industryselection;
