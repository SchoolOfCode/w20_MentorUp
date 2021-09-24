import React from "react";
import {
  Grid,
  MenuItem,
  Typography,
  Select,
  Chip,
  Input,
  Box,
} from "@material-ui/core";

function Subject({ classes, helpTopic, helpTopics, setHelpTopics }) {
  return (
    <div>
      <Box mb={3}>
        <Typography variant="h5" align="left">
          What do you need help with? If you are a Mentor, what topic can you
          provide help on?
        </Typography>
      </Box>
      <Grid item>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          fullWidth
          multiple
          value={helpTopic}
          onChange={(e) => setHelpTopics(e.target.value)}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {helpTopics.map((name) => (
            <MenuItem key={name} value={name} className={classes.hover}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </div>
  );
}

export default Subject;
