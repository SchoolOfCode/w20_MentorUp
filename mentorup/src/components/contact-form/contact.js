import { Button } from "@material-ui/core";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
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
  },
  spacing: 8,
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
        <h1 mx="auto">Mentor's information and contact</h1>
        <Grid container direction="column" justifyContent="space-around" alignItems="center">
          <Avatar alt="Avatar of the mentor" src={data.avatar} className={classes.large} />
          <p>Username: {data.username}</p>
          <p>Industry: {data.industry}</p>
          <p>Business Stage: {data.businessStage}</p>
          <p>Years in business: {data.yearsInBusiness}</p>
          <p>Expertise: {data.helpTopic}</p>
        </Grid>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message (required)"
              multiline
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              // defaultValue="Please enter your message here"
              defaultValue={`Hi, 
    I'm ${user.username} and I would like to be a successful entrepreneur.
  In order to become one, I need help from a mentor with the following: ${user.helpTopic}.
  My business is in the ${user.industry} industry and is currently at the ${user.businessStage} stage.
  I look forward to discussing my business and needs with you soon.
  Thank you for your time and consideration.
  All the best, ${user.username}.
  `}
              variant="outlined"
            />
          </div>
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
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
