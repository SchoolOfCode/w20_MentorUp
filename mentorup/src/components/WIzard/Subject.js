import React, { useState } from "react";
import {
  Grid,
  MenuItem,
  Typography,
  makeStyles,
  Select,
  Chip,
  Input,
  Box,
} from "@material-ui/core";
const helpTopics = [
  "Accounting",
  "Business Plan",
  "Building a React website",
  "Capital & Investment",
  "HR & Recruitment",
  "Networking",
  "Marketing & Social Media",
  "Preparing a pitch",
];

const useStyles = makeStyles((theme) => ({
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
