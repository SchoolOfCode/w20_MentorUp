// Import FirebaseAuth and firebase.
import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { Link } from "react-router-dom";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function Landing() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>MentorUP</h1>
        <p>Please sign-in or register</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  } else {
    window.localStorage.setItem("currentUserInfo", JSON.stringify(firebase.auth().currentUser));
    console.log("Storage", localStorage, "not", firebase.auth().currentUser);
    return (
      <div>
        <h1>MentorUP</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <p>
          <Link to="/user-details">Please fill out your user details</Link>
        </p>
        <Button variant="contained" color="primary" onClick={() => firebase.auth().signOut()}>
          Sign-out
        </Button>
      </div>
    );
  }
}

export default Landing;
