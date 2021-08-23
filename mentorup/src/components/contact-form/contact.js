import { Button, Typography } from "@material-ui/core";
import React from "react";
import Landing from "../Landing/Landing";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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
  return (
    <div>
      <p>Hello there, this is a contact form</p>
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
    </div>
  );
}

export default ContactForm;
