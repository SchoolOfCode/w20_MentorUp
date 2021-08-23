import { Avatar, Box, CardMedia, Typography, Image } from "@material-ui/core";
import React from "react";
import Header from "../Header/Header";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [imageSrc, setImageSrc] = useState("");
  const randomString = "ladflka";
  const apiSrc = `https://avatars.dicebear.com/api/gridy/${randomString}.svg`;

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
      <Box border={1} width={1 / 4} p={2} m={3} display="inline-block">
        <img src={imageSrc} alt="Mentor"></img>
        <Typography variant="h6">Claire</Typography>
      </Box>
      <Box border={1} width={1 / 4} p={2} m={3} display="inline-block">
        <img src={imageSrc} alt="Mentor"></img>
        <Typography variant="h6">Geoff</Typography>
      </Box>
      <Box border={1} width={1 / 4} p={2} m={3} display="inline-block">
        <img src={imageSrc} alt="Mentor"></img>
        <Typography variant="h6">Henry</Typography>
      </Box>
    </div>
  );
};

export default Dashboard;
