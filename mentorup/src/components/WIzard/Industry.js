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
function Industry({ classes, industry, setIndustry }) {
  return (
    <div>
      <Grid item>
        <Typography variant="h5" align="left" className={classes.ciao}>
          What industry is your business in?
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          className={classes.ciao}
          id="industry"
          label="Select an industry"
          onChange={(e) => setIndustry(e.target.value)}
          value={industry}
          select
          fullWidth
        >
          <MenuItem className={classes.hover} value="Agriculture">
            Agriculture
          </MenuItem>

          <MenuItem value="Automotive">Automotive</MenuItem>

          <MenuItem className={classes.hover} value="Bars & Restaurants">
            Bars & Restaurants
          </MenuItem>

          <MenuItem value="Building">Building</MenuItem>

          <MenuItem className={classes.hover} value="Business Services">
            Business Services{" "}
          </MenuItem>

          <MenuItem value="Education">Education</MenuItem>

          <MenuItem value="Entertainment ">Entertainment</MenuItem>

          <MenuItem value="Environment">Environment</MenuItem>

          <MenuItem value="Health & Beauty">Health & Beauty</MenuItem>

          <MenuItem className={classes.hover} value="Retail Sales">
            Retail Sales{" "}
          </MenuItem>

          <MenuItem value="Sport">Sport</MenuItem>

          <MenuItem value="Tech">Tech</MenuItem>

          <MenuItem value="Transport">Transport</MenuItem>

          <MenuItem value="Other">Other</MenuItem>
        </TextField>
      </Grid>
    </div>
  );
}
export default Industry;
