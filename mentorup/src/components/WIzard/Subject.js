import React, { useState } from "react";
import {
  Grid,
  MenuItem,
  TextField,
  Button,
  FormControlLabel,
  RadioGroup,
  Typography,
  makeStyles,
  Radio,
  Select,
  Chip,
  Input,
  Snackbar,
  IconButton,
  CardMedia,
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
  root: {
    marginBottom: theme.spacing(2),
    // width: "30ch",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxHeight: 150,
    maxWidth: 150,
  },
  ciao: {
    marginBottom: theme.spacing(3),
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
  mainLayout: {
    // flexDirection: "column",
    // backgroundColor: "green",
    padding: "16px",
  },
  h1Override: {
    fontSize: "1.875rem",
    fontWeight: "medium",
  },
}));

function Subject({ classes, helpTopic, helpTopics, setHelpTopics }) {
  return (
    <div>
      <Grid item>
        <Typography variant="h5" align="left">
          What do you need help with? If you are a Mentor, what topic can you
          provide help on?
        </Typography>
      </Grid>
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
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </div>
  );
}

export default Subject;
