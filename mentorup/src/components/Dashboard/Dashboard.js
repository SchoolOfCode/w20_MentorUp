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
  const firestore = useFirestore();

  //userUID should not be a magic number -> get data from firebase
  const userUID = "G77IDapZAJU5z4vZHwf4pY3fLH12";
  const helpRequestsRef = firestore.collection("helpRequests");
  const { data: help } = useFirestoreCollectionData(helpRequestsRef);
  let filteredHelp = [];
  let mentorIDs = [null];
  if (help) {
    filteredHelp = help.filter((request) => request.menteeID === userUID);
    mentorIDs = filteredHelp.map((request) => request.mentorID);
  }
  const userCollection = firestore.collection("userData");
  const mentorQuery = userCollection.where(`authenticationID`, "in", mentorIDs);
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
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          {mentors?.map((mentor, index) => {
            if (index > 2) return null;
            return (
              <Grid item xs={3} key={index}>
                <Link to={`/contact/${mentor.authenticationID}`}>
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
