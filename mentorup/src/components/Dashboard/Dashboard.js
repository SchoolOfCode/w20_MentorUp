import React from "react";
import { Typography, Button, Grid, Paper, Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <Typography variant="h1" m={2}>
        Welcome Toby!
      </Typography>
      <Typography variant="h3" m={2}>
        Your mentors
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        {mentorProfiles.map((mentor) => {
          return (
            <Grid item xs={3}>
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
