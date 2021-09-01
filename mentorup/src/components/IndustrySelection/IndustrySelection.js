import React from "react";
import {
  Grid,
  MenuItem,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
// const useStyles = makeStyles({
//   field: {
//     marginBottom: 20,
//   },
// });
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    // width: "30ch",
    backgroundColor: "red",
  },
  ciao: {
    marginBottom: theme.spacing(3),
  },
  buttonResponsive: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
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
}));
function Helpselection() {
  const classes = useStyles();
  return (
    <Grid
      style={{
        margin: "0 auto",
      }}
      sm={6}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        container
        direction="column"
        // justifyContent="center"
        // alignItems="space-between"
      >
        <Typography variant="h5" className={classes.ciao}>
          What industry are you interested in?
        </Typography>
        <TextField
          className={classes.ciao}
          id="industry"
          label="Select an industry"
          select
          fullWidth
          spacing={2}
        >
          <MenuItem className={classes.hover} value="Select">
            Select an industry
          </MenuItem>

          <MenuItem className={classes.hover} value="Agriculture">
            Agriculture
          </MenuItem>

          <MenuItem className={classes.hover} value="Bars & Restaurants">
            Bars & Restaurants
          </MenuItem>

          <MenuItem className={classes.hover} value="Cattle Ranchers/Livestock">
            Cattle Ranchers/Livestock
          </MenuItem>

          <MenuItem value="Entertainment ">Entertainment</MenuItem>
        </TextField>

        <Button
          variant="contained"
          color="primary"
          className={classes.buttonResponsive}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}

export default Helpselection;

// import React from "react";
// import {
//   Box,
//   MenuItem,
//   TextField,
//   Button,
//   Typography,
// } from "@material-ui/core";
// function Industryselection() {
//   return (
//     <Box component="div" width={300} display="flex" flexDirection="column">
//       <Typography variant="h5"> What industry </Typography>

//       <TextField id="subject" label="Select an industry" select>
//         <MenuItem value="Agriculture">Agriculture</MenuItem>
//         <MenuItem value="Bars & Restaurants">Bars & Restaurants</MenuItem>
//         <MenuItem value="Cattle Ranchers/Livestock">
//           Cattle Ranchers/Livestock
//         </MenuItem>
//         <MenuItem value="Entertainment Industry">
//           Entertainment Industry
//         </MenuItem>
//       </TextField>
//       <Button variant="contained" color="primary">
//         Next
//       </Button>
//     </Box>
//   );
// }

// export default Industryselection;
