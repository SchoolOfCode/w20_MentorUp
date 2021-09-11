import { Button } from "@material-ui/core";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
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
    maxWidth: 800,
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
  textField: {
    maxWidth: 800,
  },
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiTypography-h1": {
      [theme.breakpoints.up("xs")]: {
        fontSize: "2.375rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.9167rem",
      },
    },
  },
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
        <Paper className={classes.paper} elevation={3}>
          <Grid
            container
            className={classes.mainLayout}
            spacing={2}
            xs={12}
            sm={12}
            md={6}
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            style={{ width: "80vw" }}
          >
            <Typography variant="h1">About your mentor</Typography>
            <Grid item>
              <Avatar alt="Avatar of the mentor" src={data.avatar} className={classes.large} />
            </Grid>
            <Grid item>
              <Typography variant="b1" gutterBottom>
                Username: {data.username}
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="b1" gutterBottom>
                Industry: {data.industry}{" "}
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="b1" gutterBottom>
                Business Stage: {data.businessStage}{" "}
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="b1" gutterBottom>
                Years in business: {data.yearsInBusiness}{" "}
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="b1" gutterBottom>
                Expertise: {data.helpTopic.join(", ")}{" "}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid
            container
            className={classes.mainLayout}
            spacing={2}
            style={{
              margin: "0 auto",
            }}
            xs={12}
            sm={12}
            md={6}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <TextField
                required
                id="outlined-multiline-static"
                label="Message (required)"
                style={{ width: "80vw" }}
                className={classes.textField}
                fullWidth
                multiline
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                defaultValue="Please enter your message here"
                //             defaultValue={`Hi,
                //   I'm ${user.username} and I would like to be a successful entrepreneur.
                // In order to become one, I need help from a mentor with the following: ${user.helpTopic}.
                // My business is in the ${user.industry} industry and is currently at the ${user.businessStage} stage.
                // I look forward to discussing my business and needs with you soon.
                // Thank you for your time and consideration.
                // All the best, ${user.username}.
                // `}
                variant="outlined"
              />
            </Grid>
            <Link to="../Dashboard">
              <Button variant="contained" color="primary" type="submit">
                Send
              </Button>
            </Link>
          </Grid>
        </form>
      </div>
    );
  } else {
    return (
      <p>
        Thanks for submitting your request, the mentor will receive it and be in contact shortly.
      </p>
    );
  }
}

export default ContactForm;
