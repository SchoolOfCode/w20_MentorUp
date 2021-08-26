import { Card, CardMedia, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import cx from "clsx";
import heroimage from "../../assets/heroimage.jpg";
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

const MatchWithMentor = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4"> Your mentor is </Typography>
      <Card variant="outlined" className={classes.root}>
        <Typography className={cx(classes.root, classes.media)} variant="h5">
          Toby Smith!
        </Typography>
        <CardMedia
          className={cx(classes.media, classes.root)}
          component="img"
          image={heroimage}
          title="Random Photo"
        ></CardMedia>
        <Button
          className={cx(classes.media, classes.root)}
          style={{ width: "90%" }}
          m={2}
          variant="contained"
          color="primary"
        >
          Contact
        </Button>
      </Card>
    </div>
  );
};

export default MatchWithMentor;