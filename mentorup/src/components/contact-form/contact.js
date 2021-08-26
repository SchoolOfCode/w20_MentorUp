import { Button, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import Landing from "../Landing/Landing";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import "firebase/firestore";
import { useFirestoreDocData, useFirestore } from "reactfire";

//default material ui theme example TO CHANGE
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "75ch",
    },
  },
}));

function ContactForm() {
  const classes = useStyles();
  let { mentorID } = useParams();

  // easily access the Firestore library

  const mentorRef = useFirestore().collection("mentors").doc(mentorID); //6ljttPxPJmziAmtdNSfr

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(mentorRef);

  console.log("The status is: " + status);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  console.log("The data is: " + data.email);

  return (
    <div>
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
      <div></div>

      <h3>
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
