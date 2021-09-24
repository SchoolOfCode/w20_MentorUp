import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import "firebase/firestore";
import { useFirestoreDocData, useFirestore, useUser } from "reactfire";

//default material ui theme example TO CHANGE
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      maxWidth: "90%",
    },
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginTop: "60px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "340px",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "400px",
    },

    minHeight: "400px",
  },
  mainLayout: {
    // flexDirection: "column",
    // backgroundColor: "green",
    padding: "16px",
  },
  // h1Override: {
  //   fontSize: "1.875rem",
  //   fontWeight: "medium",
  // },
  textField: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: "376px",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "436px",
    },
  },
  avatar: {
    width: "150px",
    height: "150px",
  },
  // "@global": {
  //   // You should target [class*="MuiButton-root"] instead if you nest themes.
  //   ".MuiTypography-h1": {
  //     [theme.breakpoints.up("xs")]: {
  //       fontSize: "2.375rem",
  //     },
  //     [theme.breakpoints.up("sm")]: {
  //       fontSize: "2.9167rem",
  //     },
  //   },
  // },
}));

function ContactForm() {
  const { data: user } = useUser();
  const firestore = useFirestore();
  const helpRequests = firestore.collection("helpRequests");
  const classes = useStyles();
  let { mentorID } = useParams();
  const [message, setMessage] = useState("");
  const [showThanks, setShowThanks] = useState(false);

  // easily access the Firestore library

  const mentorRef = useFirestore().collection("userData").doc(mentorID);
  var userDataCollection = firestore.collection("userData");

  useEffect(() => {
    const getUserDetails = async () => {
      if (user === null || user === undefined) {
        return;
      }

      const userDetailsQuery = await userDataCollection
        .where("authenticationID", "==", user.uid)
        .get();

      if (!userDetailsQuery.empty) {
        // grab the first entry

        let existingUserFirebaseData = userDetailsQuery.docs[0].data();
        let messageTemplate = `Hi, I'm ${existingUserFirebaseData.username} and I would like to be a successful entrepreneur. In order to become one, I need help from a mentor with the following: ${existingUserFirebaseData.helpTopic}. My business is in the ${existingUserFirebaseData.industry} industry and is currently at the ${existingUserFirebaseData.businessStage} stage. I look forward to discussing my business and needs with you soon. Thank you for your time and consideration. All the best, ${existingUserFirebaseData.username}.`;
        setMessage(messageTemplate);
      }
    };
    getUserDetails();
  }, []);

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(mentorRef);
  const handleSubmit = async (event) => {
    event.preventDefault();

    await helpRequests.add({
      mentorID: data.authenticationID,
      menteeID: user.uid,
      message: message,
    });
    setShowThanks(true);
  };

  if (user === null) {
    return (
      <p>
        You must be logged in to use this functionality, please login
        <Link to="/landing"> here</Link>
      </p>
    );
  }

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!showThanks) {
    return (
      <div>
        <Paper className={classes.paper}>
          <Grid>
            {/* <Typography variant="h1">About your mentor</Typography> */}
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-evently"
              alignItems="center"
            >
              <Box mb={3}>
                <Typography variant="b1" gutterBottom>
                  <strong>{data.username.toUpperCase()}</strong>
                </Typography>
              </Box>

              <Box alignSelf="center">
                <Avatar
                  alt="Avatar of the mentor"
                  src={data.avatar}
                  className={classes.avatar}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                height="200px"
                justifyContent="space-evenly"
                alignItems="center"
                mt={3}
              >
                <Typography variant="b1" gutterBottom>
                  <strong>Industry: </strong> {data.industry}
                </Typography>

                <Typography variant="b1" gutterBottom>
                  <strong>Business Stage: </strong>
                  {data.businessStage}
                </Typography>

                <Typography variant="b1" gutterBottom>
                  <strong>Years in business:</strong> {data.yearsInBusiness}
                </Typography>

                <Typography variant="b1">
                  <strong>Expertise:</strong>{" "}
                  <Box
                    display="flex"
                    flexDirection="column"
                    flexWrap="wrap"
                    maxWidth="200px"
                  >
                    {data.helpTopic.join(", ")}
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Paper>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid
            container
            className={classes.mainLayout}
            spacing={2}
            style={{
              margin: "0 auto",
            }}
            // xs={12}
            // sm={12}
            // md={6}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              required
              id="outlined-multiline-static"
              label="Message (required)"
              // style={{ width: "80vw" }}
              className={classes.textField}
              fullWidth
              multiline
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              defaultValue="Please enter your message here"
              variant="outlined"
            />
            <Box>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Send
              </Button>
            </Box>
          </Grid>
        </form>
      </div>
    );
  } else {
    return (
      <>
        <p>
          Thanks for submitting your request, the mentor will receive it and be
          in contact shortly.
        </p>
        <Link to="../Dashboard">
          <Button variant="contained" color="primary" type="submit">
            Return to Dashboard
          </Button>
        </Link>
      </>
    );
  }
}

export default ContactForm;
