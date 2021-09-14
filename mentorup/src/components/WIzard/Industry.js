import {
  Grid,
  MenuItem,
  TextField,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";

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
const industriesArray = [
  "Agiculture",
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
