import React from "react";
import { Typography, Button, Grid, Paper, Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "firebase/firestore";
import firebase from "firebase";
import { useFirestore, useUser, useFirestoreDocData, useFirestoreCollectionData } from "reactfire";

const Dashboard = () => {
  const { data: user } = useUser();
  const firestore = useFirestore();
  const userUID = "G77IDapZAJU5z4vZHwf4pY3fLH12";
  const helpRequestsRef = firestore.collection("helpRequests");
  const mentorRef = firestore.collection("userData");
  const { data: help } = useFirestoreCollectionData(helpRequestsRef);
  const { data: users } = useFirestoreCollectionData(mentorRef);
  console.log("Help: ", help, " Users: ", users);
  if (help) {
    const filteredHelp = help.filter((request) => request.menteeID === userUID);
    console.log("Filtered Help", filteredHelp);
    if (users) {
      const mentorsList = users.filter((item) => filteredHelp.includes(item["NO_ID_FIELD"]));
      console.log("Userful Mentors", mentorsList);
    }
  }
  const randomString = "aalskdjf";
  const imageSrc = `https://avatars.dicebear.com/api/gridy/${randomString}.svg`;
  const mentorProfiles = [
    {
      name: "Megan",
      imageSrc: imageSrc,
    },
    {
      name: "George",
      imageSrc: imageSrc,
    },
    {
      name: "Chris",
      imageSrc: imageSrc,
    },
  ];
  return (
    <div data-testid="container-div">
      <Typography variant="h3" m={2}>
        {"Welcome \n"}
        {firebase?.auth()?.currentUser?.displayName
          ? firebase.auth().currentUser.displayName
          : "Loading Name..."}
        !
      </Typography>
      <Typography variant="h4" m={2}>
        Your mentors
      </Typography>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
        {users?.map((mentor, index) => {
          if (index > 2) return null;
          return (
            <Grid item xs={3} key={index}>
              <Paper>
                <img src={mentor.avatar} alt="Mentor"></img>
                <Typography variant="h6">{mentor.username}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
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
