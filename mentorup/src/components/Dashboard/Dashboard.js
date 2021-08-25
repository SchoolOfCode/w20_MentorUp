import { Typography, Button, Grid, Paper } from "@material-ui/core";
import React from "react";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import MentorProfile from "./MentorProfile/MentorProfile";

const Dashboard = () => {
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
      console.log(image.url);
    }
    getImage();
  }, []);
  return (
    <div>
      <Header />
      <Typography variant="h1" m={2}>
        Welcome Toby!
      </Typography>
      <Typography variant="h3" m={2}>
        Your mentors
      </Typography>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
        {mentorProfiles.map((mentor) => {
          return (
            <Grid item md={3}>
              <Paper>
                <img src={mentor.imageSrc} alt="Mentor"></img>
                <Typography variant="h6">{mentor.name}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Button variant="contained" color="primary" m={2}>
        Find a new mentor
      </Button>
    </div>
  );
};

export default Dashboard;
