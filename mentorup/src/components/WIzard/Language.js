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
function Language({ setLanguage, language, classes }) {
  return (
    <div>
      <Grid item>
        <Typography variant="h5" align="left">
          What language do you speak?
        </Typography>
        <Typography variant="h6" align="left">
          We will provide support for you
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          id="language"
          label="Select a Language"
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          select
          fullWidth
        >
          <MenuItem value="English" className={classes.hover}>
            🇬🇧 English
          </MenuItem>
          <MenuItem value="Arabic" className={classes.hover}>
            Arabic
          </MenuItem>
          <MenuItem value="Bengali" className={classes.hover}>
            Bengali
          </MenuItem>
          <MenuItem value="French" className={classes.hover}>
            🇫🇷 French
          </MenuItem>
          <MenuItem value="German" className={classes.hover}>
            🇩🇪 German
          </MenuItem>
          <MenuItem value="Gujarati" className={classes.hover}>
            Gujarati
          </MenuItem>
          <MenuItem value="Hindi" className={classes.hover}>
            🇮🇳 Hindi
          </MenuItem>
          <MenuItem value="Italian" className={classes.hover}>
            🇮🇹 Italian
          </MenuItem>
          <MenuItem value="Lithuanian" className={classes.hover}>
            🇱🇹 Lithuanian
          </MenuItem>
          <MenuItem value="Persian" className={classes.hover}>
            🇮🇷 Persian/Farsi
          </MenuItem>
          <MenuItem value="Polish" className={classes.hover}>
            🇵🇱 Polish
          </MenuItem>
          <MenuItem value="Portuguese" className={classes.hover}>
            🇵🇹 Portuguese
          </MenuItem>
          <MenuItem value="Punjabi" className={classes.hover}>
            Punjabi
          </MenuItem>
          <MenuItem value="Romanian" className={classes.hover}>
            🇷🇴 Romanian
          </MenuItem>
          <MenuItem value="Somali" className={classes.hover}>
            🇸🇴 Somali
          </MenuItem>
          <MenuItem value="Spanish" className={classes.hover}>
            🇪🇸 Spanish
          </MenuItem>
          <MenuItem value="Tagalog" className={classes.hover}>
            🇵🇭 Tagalog/Filipino
          </MenuItem>
          <MenuItem value="Tamil" className={classes.hover}>
            Tamil
          </MenuItem>
          <MenuItem value="Turkish" className={classes.hover}>
            🇹🇷 Turkish
          </MenuItem>
          <MenuItem value="Urdu" className={classes.hover}>
            🇵🇰 Urdu
          </MenuItem>
        </TextField>
      </Grid>
    </div>
  );
}
export default Language;
