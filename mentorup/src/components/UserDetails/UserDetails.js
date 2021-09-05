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
  Select,
  Chip,
  Input,
  Snackbar,
  IconButton,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

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
  const classes = useStyles();

  const helpTopics = [
    "Preparing a pitch",
    "Business Plan",
    "Building a React website",
    "Networking",
  ];

  // states
  const [loading, setLoading] = useState(true);
  const [helpTopic, setHelpTopics] = useState(["Preparing a pitch"]);
  const [needsSignLanguageInterpreter, setNeedsSignLanguageInterpreter] =
    useState(true);
  const [language, setLanguage] = useState("English");
  const [industry, setIndustry] = useState("Agriculture");
  const [yearsInBusiness, setYearsInBusiness] = useState(0);
  const [menteeOrMentor, setMenteeOrMentor] = useState("Mentor");
  const [username, setUsername] = useState("");
  const [businessStage, setBusinessStage] = useState("Startup");
  const [existingFirebaseId, setExistingFirebaseId] = useState("");
  const [showUpdated, setShowUpdated] = useState(false);

  useEffect(() => {
    const getUserDetails = async () => {
      if (user === null || user === undefined) {
        return;
      }

      const userDetailsQuery = await userDataCollection
        .where("authenticationID", "==", user.uid)
        .get();

      setLoading(false);

      if (!userDetailsQuery.empty) {
        // grab the first entry
        let existingUserFirebaseData = userDetailsQuery.docs[0].data();

        // set the states to the existing data
        setExistingFirebaseId(userDetailsQuery.docs[0].id);
        setLanguage(existingUserFirebaseData.language);
        setIndustry(existingUserFirebaseData.industry);
        setBusinessStage(existingUserFirebaseData.businessStage);
        setHelpTopics(existingUserFirebaseData.helpTopic);
        setMenteeOrMentor(existingUserFirebaseData.type);
        setUsername(existingUserFirebaseData.username);
        setYearsInBusiness(existingUserFirebaseData.yearsInBusiness);
        setNeedsSignLanguageInterpreter(
          existingUserFirebaseData.needsSignLanguageInterpreter
        );
      }
    };
    getUserDetails();
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      businessStage: businessStage,
      helpTopic: helpTopic,
      industry: industry,
      type: menteeOrMentor,
      username: username,
      yearsInBusiness: yearsInBusiness,
      language: language,
      needsSignLanguageInterpreter: needsSignLanguageInterpreter,
    };

    if (existingFirebaseId) {
      // update the existing record
      await userDataCollection.doc(existingFirebaseId).update(data);
    } else {
      // add a new record
      data.authenticationID = user.uid;
      await userDataCollection.add(data);
    }

    setShowUpdated(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowUpdated(false);
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
                Username
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                label="Enter your username"
              />
            </Grid>

            <Grid item>
              <Typography variant="h5" align="left">
                Business Stage
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                select
                value={businessStage}
                onChange={(e) => setBusinessStage(e.target.value)}
                id="business_stage"
                label="What is your business stage?"
              >
                <MenuItem value="Startup" className={classes.hover}>
                  Startup
                </MenuItem>
                <MenuItem value="Active" className={classes.hover}>
                  Active
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item>
              <Typography variant="h5" align="left">
                Are you a Mentor or Mentee?
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                select
                value={menteeOrMentor}
                onChange={(e) => setMenteeOrMentor(e.target.value)}
                id="mentor_mentee"
                label="Are you a Mentor or Mentee?"
              >
                <MenuItem value="Mentor" className={classes.hover}>
                  Mentor
                </MenuItem>
                <MenuItem value="Mentee" className={classes.hover}>
                  Mentee
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                type="number"
                value={yearsInBusiness}
                onChange={(e) => setYearsInBusiness(e.target.value)}
                id="yearsinbusiness"
                label="How many years have you been in business?"
              />
            </Grid>
            <Grid item>
              <Typography variant="h5" align="left">
                What do you need help with?
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
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
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
                checked={needsSignLanguageInterpreter === true}
                onChange={(e) => setNeedsSignLanguageInterpreter(true)}
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
                checked={needsSignLanguageInterpreter === false}
                onChange={(e) => setNeedsSignLanguageInterpreter(false)}
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
                  English
                </MenuItem>
                <MenuItem value="French" className={classes.hover}>
                  French
                </MenuItem>
                <MenuItem value="Arabic" className={classes.hover}>
                  Arabic
                </MenuItem>
                <MenuItem value="Hindi" className={classes.hover}>
                  Hindi
                </MenuItem>
                <MenuItem value="Punjabi" className={classes.hover}>
                  Punjabi
                </MenuItem>
                <MenuItem value="Spanish" className={classes.hover}>
                  Spanish
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item>
              <Typography variant="h5" align="left" className={classes.ciao}>
                What industry are you interested in?
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
            </Grid>
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
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={showUpdated}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Your Details Have Been Saved"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
}

export default UserDetails;
