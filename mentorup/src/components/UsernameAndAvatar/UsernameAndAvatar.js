import React, { useState } from "react";
import { Typography, Button, Grid, CardMedia } from "@material-ui/core";
const usernameGen = require("username-gen");

function UsernameAndAvatar() {
  const [avatar, setAvatar] = useState(newAvatar());
  const [userName, setuserName] = useState(usernameGen.generateUsername(8, false));
  function newAvatar() {
    const types = ["bottts", "gridy", "identicon"];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const generateRandomString = () => Math.random().toString(20).substring(2, 8);
    return `https://avatars.dicebear.com/api/${randomType}/${generateRandomString()}.svg`;
  }
  return (
    <Grid
      style={{
        margin: "0 auto",
      }}
      xs={10}
      md={3}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Grid item p={2}>
        <Typography variant="h5" align="center">
          Select an Avatar
        </Typography>
        <CardMedia
          component="img"
          image={avatar}
          title="Avatar"
          onClick={() => setAvatar(newAvatar())}
        ></CardMedia>
        <Button
          onClick={() => setAvatar(newAvatar())}
          variant="contained"
          color="primary"
          fullWidth
        >
          New Avatar
        </Button>
      </Grid>
      <Grid item>
        <Typography variant="h5">{userName}</Typography>
        <Button
          onClick={() =>
            setuserName(
              usernameGen.generateUsername(Math.floor(Math.random() * 4 + 6), false).toUpperCase()
            )
          }
          variant="contained"
          color="primary"
          fullWidth
        >
          New Username
        </Button>
      </Grid>
      <Button variant="contained" color="primary" fullWidth>
        Next
      </Button>
    </Grid>
  );
}

export default UsernameAndAvatar;
