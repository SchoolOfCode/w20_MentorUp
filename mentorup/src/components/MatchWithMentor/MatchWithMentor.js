import { Card, CardMedia, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import cx from "clsx";
import mentorProfiles from "../../assets/mentor";
import { Link } from "react-router-dom";
import "firebase/firestore";
import firebase from "firebase";
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
  requirements: ["marketing", "HR"],
  industry: "cheese",
};

export function findMentor(listOfMentors, helpNeeded) {
  if (listOfMentors.length > 1) {
    const sameIndustry = listOfMentors.filter((mentor) => mentor.industry === helpNeeded.industry);
    if (sameIndustry.length !== 0) {
      listOfMentors = [...sameIndustry];
    }
  }
  let matchedMentor = listOfMentors[Math.floor(Math.random() * listOfMentors.length)];
  return matchedMentor;
}
const MatchWithMentor = () => {
  const { data: user } = useUser();
  const firestore = useFirestore();
  const mentorRef = firestore
    .collection("userData")
    .where("type", "==", "mentor")
    .where("helpTopic", "array-contains-any", help.requirements);
  const { data: mentors } = useFirestoreCollectionData(mentorRef);
  console.log(mentors);
  const myMentor = mentors ? findMentor(mentors, help) : [];
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
        <Link to={`/contact/${myMentor["NO_ID_FIELD"]}`}>
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
