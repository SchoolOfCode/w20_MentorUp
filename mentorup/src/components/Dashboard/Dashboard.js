import React from "react";
import { Typography, Button, Grid, Paper, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import "firebase/firestore";

import { useFirestore, useUser, useFirestoreCollectionData } from "reactfire";

const Dashboard = () => {
  const { data: user } = useUser();
  const firestore = useFirestore();
  const userRef = firestore
    .collection("userData")
    .where("authenticationID", "==", user.uid);
  const { data: currentUserObject } = useFirestoreCollectionData(userRef);
  //the user is in an Array, this removes it if it's there
  const currentUser = currentUserObject ? currentUserObject[0] : null;
  //Finds help requests that the user has been in
  const helpRequestsRef = firestore.collection("helpRequests");
  const { data: help } = useFirestoreCollectionData(helpRequestsRef);
  let filteredHelp = [];
  let mentorIDs = [];
  if (help) {
    filteredHelp = help.filter(
      (request) => request.menteeID === currentUser?.authenticationID
    );
    mentorIDs = filteredHelp.map((request) => request.mentorID);
  }
  mentorIDs = [...new Set(mentorIDs)];
  //If mentorId is empty, the query still needs to be made with something
  if (mentorIDs.length === 0) mentorIDs.push("RandomFillerToFixQuery");
  const mentorQuery = firestore
    .collection("userData")
    .where(`authenticationID`, "in", mentorIDs.slice(0, 3));
  //collects the mentors which match with the Ids
  const { data: mentors } = useFirestoreCollectionData(mentorQuery);
  const sortedMentors = mentors
    ? mentors.sort((a, b) => a.username.localeCompare(b.username))
    : null;
  console.log("My Mentors: ", sortedMentors);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={5}
      component="div"
      data-testid="container-div"
    >
      <Box mb={2}>
        <Typography variant="h4" gutterBottom>
          {"Welcome, "}
          {user?.displayName ? user.displayName : "Loading Name..."}!
        </Typography>
        <Typography variant="h5" gutterBottom>
          {mentors?.length > 0 ? " Here are your mentors" : "No Mentors..."}
        </Typography>
      </Box>

      {mentors ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          sm={8}
          xs={6}
        >
          {sortedMentors?.map((mentor, index) => {
            if (index > 2) return null;
            return (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/contact/${mentor["NO_ID_FIELD"]}`}
                >
                  <Paper>
                    <Box
                      display="flex"
                      flexDirection="column"
                      flexWrap="wrap"
                      alignContent="center"
                    >
                      <img
                        style={{ maxWidth: "150px", maxHeight: "150px" }}
                        src={mentor.avatar}
                        alt="Mentor"
                      />
                      <Typography variant="h6">{mentor.username}</Typography>
                    </Box>
                  </Paper>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        "Loading..."
      )}
      <Box m={5}>
        <Link to="/match-with-mentor">
          <Button variant="contained" color="primary">
            Find a new mentor
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Dashboard;
