import React from "react";
import { Typography, Button, Grid, Paper, Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "firebase/firestore";
import firebase from "firebase";
import {
  useFirestore,
  useUser,
  useFirestoreDocData,
  useFirestoreCollectionData,
  useFirestoreCollection,
} from "reactfire";

const Dashboard = () => {
  const { data: user } = useUser();
  //If user is undefined, uses the local storage
  const currentUserInfo = user ? user : JSON.parse(localStorage.getItem("currentUserInfo"));
  const firestore = useFirestore();
  const userRef = firestore
    .collection("userData")
    .where("authenticationID", "==", currentUserInfo.uid);
  const { data: currentUserObject } = useFirestoreCollectionData(userRef);
  //the user is in an Array, this removes it if it's there
  const currentUser = currentUserObject ? currentUserObject[0] : null;
  console.log(currentUser);
  //Finds help requests that the user has been in
  const helpRequestsRef = firestore.collection("helpRequests");
  const { data: help } = useFirestoreCollectionData(helpRequestsRef);
  let filteredHelp = [];
  let mentorIDs = [];
  if (help) {
    filteredHelp = help.filter((request) => request.menteeID === currentUser?.authenticationID);
    mentorIDs = filteredHelp.map((request) => request.mentorID);
  }
  if (mentorIDs.length === 0) mentorIDs.push("RandomFillerToFixQuery");
  const mentorQuery = firestore.collection("userData").where(`authenticationID`, "in", mentorIDs);
  const { data: mentors } = useFirestoreCollectionData(mentorQuery);

  return (
    <div data-testid="container-div">
      <Typography variant="h3" m={2}>
        {"Welcome \n"}
        {user?.displayName ? user.displayName : "Loading Name..."}!
      </Typography>
      <Typography variant="h4" m={2}>
        Your mentors
      </Typography>
      {mentors ? (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
          {mentors?.map((mentor, index) => {
            if (index > 2) return null;
            return (
              <Grid item xs={3} key={index}>
                <Link to={`/contact/${mentor["NO_ID_FIELD"]}`}>
                  <Paper>
                    <img src={mentor.avatar} alt="Mentor"></img>
                    <Typography variant="h6">{mentor.username}</Typography>
                  </Paper>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        "Loading..."
      )}
      <Box m={2}>
        <Link to="/match-with-mentor">
          <Button variant="contained" color="primary">
            Find a new mentor
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Dashboard;
