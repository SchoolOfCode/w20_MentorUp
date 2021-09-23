import {
  Grid,
  MenuItem,
  TextField,
  Typography,
  Box,
  FormControl,
} from "@material-ui/core";

const industriesArray = [
  "Agriculture",
  " Automotive",
  "Bars & Restaurants",
  "Business Services",
  "Construction",
  "Education",
  "Entertainment",
  "Environment",
  "Health & Beauty",
  "Retail Sales",
  "Sport",
  "Tech",
  "Transport",
  "Other",
];

function Industry({ classes, industry, setIndustry }) {
  return (
    <div>
      <Box mb={3}>
        <Typography variant="h5" align="left">
          What industry is your business in?
        </Typography>
      </Box>

      <Grid item>
        <Box mb={3}>
          <TextField
            id="industry"
            label="Select an industry"
            onChange={(e) => setIndustry(e.target.value)}
            value={industry}
            select
            fullWidth
            required
            style={{ paddingTop: "25px" }}
          >
            {industriesArray.map((name) => (
              <MenuItem className={classes.hover} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Grid>
    </div>
  );
}
export default Industry;
