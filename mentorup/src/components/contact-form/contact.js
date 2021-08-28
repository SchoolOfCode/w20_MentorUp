import { Button, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import Landing from "../Landing/Landing";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { useParams } from "react-router-dom";
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

  console.log("user is: " + user.displayName);

  const classes = useStyles();
  let { mentorID } = useParams();

  // easily access the Firestore library

  const mentorRef = useFirestore().collection("mentors").doc(mentorID); //6ljttPxPJmziAmtdNSfr

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(mentorRef);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 mx="auto">Mentor's information and contact</h1>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Avatar
          alt="Avatar of the mentor"
          src={data.avatar}
          className={classes.large}
        />
        <p>Username: {data.username}</p>
        <p>Industry: {data.industry}</p>
        <p>Business Stage: {data.businessStage}</p>
        <p>Years in business: {data.yearsInBusiness}</p>
        <p>Expertise: {data.expertise}</p>
      </Grid>

      {/*
      MVP1 code below:
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="outlined-required"
            label="Email (required)"
            defaultValue="Type your email here"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-multiline-static"
            label="Message (required)"
            multiline
            rows={10}
            defaultValue="Please enter your message here"
            variant="outlined"
          />
        </div>
      </form>
       <Button variant="contained" color="primary" onClick={}>
        Send
      </Button> */}
      <h3 mx="auto">
        {" "}
        To contact your mentor, press the button below to be redirected to your
        email client
      </h3>
      <Button variant="contained" color="primary" href={`mailto:${data.email}`}>
        Send email
      </Button>
    </div>
  );
}

export default ContactForm;
