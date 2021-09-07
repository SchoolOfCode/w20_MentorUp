import React from "react";
import { Typography, Button, Grid, Paper, Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "firebase/firestore";
import { useFirestore, useUser, useFirestoreDocData, useFirestoreCollectionData } from "reactfire";

const Dashboard = () => {
  const { data: user } = useUser();
  const firestore = useFirestore();
  const userUID = "G77IDapZAJU5z4vZHwf4pY3fLH12";
  const helpRequestsRef = firestore.collection("helpRequests");
  const mentorRef = firestore.collection("userData");
  const { data: help } = useFirestoreCollectionData(helpRequestsRef);
  const { data: users } = useFirestoreCollectionData(mentorRef);

  if (help) {
    const filteredHelp = help.filter((request) => request.menteeID === userUID);
    if (users) {
      const mentorsList = users.filter((user) => filteredHelp.includes(user.authenticationID));
      console.log(mentorsList);
    }
  }

  const [imageSrc, setImageSrc] = useState("");
  const randomString = "aalskdjf";
  const apiSrc = `https://avatars.dicebear.com/api/gridy/${randomString}.svg`;
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

  useEffect(() => {
    async function getImage() {
      const image = await fetch(apiSrc);
      setImageSrc(image.url);
    }
    getImage();
  }, []);
  return (
    <div data-testid="container-div">
      <Typography variant="h3" m={2}>
        Welcome Toby!
      </Typography>
      <Typography variant="h4" m={2}>
        Your mentors
      </Typography>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
        {mentorProfiles.map((mentor, index) => {
          return (
            <Grid item xs={3} key={index}>
              <Paper>
                <img src={mentor.imageSrc} alt="Mentor"></img>
                <Typography variant="h6">{mentor.name}</Typography>
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
