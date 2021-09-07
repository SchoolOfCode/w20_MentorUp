import { Card, CardMedia, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import cx from "clsx";
import mentorProfiles from "../../assets/mentor";
import { Link } from "react-router-dom";
import "firebase/firestore";
import { useFirestore, useUser, useFirestoreCollectionData } from "reactfire";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
    padding: 6,
    marginTop: 20,
  },
  media: {
    maxWidth: "90%",
    // border: "1px solid black",
    // margin: "6",
  },
});

const help = {
  requirements: "Preparing a pitch",
  industry: "Cattle Ranchers",
};

export function findMentor(listOfMentors) {
  let mentorsWithRequirements = listOfMentors.filter((mentor) =>
    mentor.helpTopic.includes(help.requirements)
  );
  if (mentorsWithRequirements.length > 1) {
    const sameIndustry = mentorsWithRequirements.filter(
      (mentor) => mentor.industry === help.industry
    );
    if (sameIndustry.length !== 0) {
      mentorsWithRequirements = sameIndustry;
    }
  }
  let matchedMentor =
    mentorsWithRequirements[Math.floor(Math.random() * mentorsWithRequirements.length)];
  return matchedMentor;
}
const MatchWithMentor = () => {
  const firestore = useFirestore();
  const mentorRef = firestore.collection("userData");
  const { data: users } = useFirestoreCollectionData(mentorRef);
  const myMentor = findMentor(users);
  const classes = useStyles();
  return myMentor ? (
    <div>
      <Typography variant="h4"> Your mentor is </Typography>
      <Card variant="outlined" className={classes.root}>
        <Typography className={cx(classes.root, classes.media)} variant="h5">
          {myMentor.username}
        </Typography>
        <CardMedia
          className={cx(classes.media, classes.root)}
          component="img"
          image={myMentor.avatar}
          title="Random Photo"
        ></CardMedia>
        <Link to="/contact/6ljttPxPJmziAmtdNSfr">
          <Button
            className={cx(classes.media, classes.root)}
            style={{ width: "90%" }}
            m={2}
            variant="contained"
            color="primary"
          >
            Contact Mentor
          </Button>
        </Link>
      </Card>
    </div>
  ) : (
    <h1>No Mentors...</h1>
  );
};

export default MatchWithMentor;
