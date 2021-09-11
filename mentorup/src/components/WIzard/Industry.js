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
          {industriesArray.map((name) => (
            <MenuItem className={classes.hover} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </div>
  );
}
export default Industry;
