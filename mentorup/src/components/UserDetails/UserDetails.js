import React, { useState, useEffect, useRef } from "react";
import "firebase/firestore";
import { useFirestoreDocData, useFirestore, useUser } from "reactfire";
import { Link } from "react-router-dom";

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
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    // width: "30ch",
    backgroundColor: "red",
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
}));

function UserDetails() {
  const { data: user } = useUser();

  const firestore = useFirestore();
  const userDataCollection = firestore.collection("userData");
  let userDetails = useRef(null);
  const classes = useStyles();

  // states
  const [loading, setLoading] = useState(true);
  const [needsHelpWith, setNeedsHelpWith] = useState("Dogs and Cats");
  const [needsSignLanguageInterpreter, setNeedsSignLanguageInterpreter] =
    useState(true);
  const [language, setLanguage] = useState("English");
  const [industry, setIndustry] = useState("Agriculture");

  useEffect(() => {
    async function getUserDetails() {
      if (user === null || user === undefined) {
        return;
      }

      const userDetailsQuery = await userDataCollection
        .where("authenticationID", "==", user.uid)
        .get();

      setLoading(false);

      if (!userDetailsQuery.empty) {
        // grab the first entry
        userDetails.current = userDetailsQuery.docs[0].data();
      }
    }

    getUserDetails();
  }, [user, userDataCollection]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user === null) {
    return (
      <p>
        You must be logged in to use this functionality, please login
        <Link to="/landing"> here</Link>
      </p>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid
          style={{
            margin: "0 auto",
          }}
          sm={6}
          md={3}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item container direction="column" spacing={4}>
            <Grid item>
              <Typography variant="h3" align="center">
                Please fill out your details:
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="h5" align="left">
                What do you need help with?
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                id="subject"
                label="Select a subject"
                onChange={(e) => setNeedsHelpWith(e.target.value)}
                value={needsHelpWith}
                select
                fullWidth
              >
                <MenuItem value="Select">Select an item</MenuItem>
                <MenuItem value="Pitching" className={classes.hover}>
                  Preparing a pitch
                </MenuItem>
                <MenuItem value="Business Plan" className={classes.hover}>
                  Business Plan
                </MenuItem>
                <MenuItem value="Dogs and Cats" className={classes.hover}>
                  Dogs and Cats
                </MenuItem>
                <MenuItem value="Airplaines" className={classes.hover}>
                  Airplaines
                </MenuItem>
              </TextField>
            </Grid>

            <Grid item>
              <Typography variant="h5" align="left">
                Do you need a British Sign Language interpreter?
              </Typography>
            </Grid>

            <RadioGroup aria-label="mentorormentee" name="mentorormentee">
              <FormControlLabel
                value="Yes"
                control={<Radio />}
                label="Yes"
                labelPlacement="start"
                style={{
                  justifyContent: "space-between",
                  margin: "0",
                  padding: "16px",
                }}
              />
              <FormControlLabel
                value="No"
                control={<Radio />}
                label="No"
                labelPlacement="start"
                style={{
                  justifyContent: "space-between",
                  margin: "0",
                  padding: "16px",
                }}
              />
            </RadioGroup>

            <Grid item>
              <Typography variant="h5" align="left">
                What language do you speak?
              </Typography>
              <Typography variant="h6" align="left">
                We will provide support for you
              </Typography>
            </Grid>

            <RadioGroup aria-label="mentorormentee" name="mentorormentee">
              <FormControlLabel
                value="English"
                control={<Radio />}
                label="English"
                labelPlacement="start"
                style={{
                  justifyContent: "space-between",
                  margin: "0",
                  padding: "16px",
                }}
              />
              <FormControlLabel
                value="French"
                control={<Radio />}
                label="French"
                labelPlacement="start"
                style={{
                  justifyContent: "space-between",
                  margin: "0",
                  padding: "16px",
                }}
              />
              <FormControlLabel
                value="Arabic"
                control={<Radio />}
                label="Arabic"
                labelPlacement="start"
                style={{
                  justifyContent: "space-between",
                  margin: "0",
                  padding: "16px",
                }}
              />
              <FormControlLabel
                value="Hindi"
                control={<Radio />}
                label="Hindi"
                labelPlacement="start"
                style={{
                  justifyContent: "space-between",
                  margin: "0",
                  padding: "16px",
                }}
              />
              <FormControlLabel
                value="Punjabi"
                control={<Radio />}
                label="Punjabi"
                labelPlacement="start"
                style={{
                  justifyContent: "space-between",
                  margin: "0",
                  padding: "16px",
                }}
              />
              <FormControlLabel
                value="Spanish"
                control={<Radio />}
                label="French"
                labelPlacement="start"
                style={{
                  justifyContent: "space-between",
                  margin: "0",
                  padding: "16px",
                }}
              />
            </RadioGroup>

            <Typography variant="h5" align="left" className={classes.ciao}>
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

              <MenuItem
                className={classes.hover}
                value="Cattle Ranchers/Livestock"
              >
                Cattle Ranchers/Livestock
              </MenuItem>

              <MenuItem value="Entertainment ">Entertainment</MenuItem>
            </TextField>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonResponsive}
              type="submit"
            >
              Save User Details
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default UserDetails;
