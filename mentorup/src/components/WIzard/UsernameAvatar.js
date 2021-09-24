import { Typography, Box, Button, Grid, CardMedia } from "@material-ui/core";
import usernameGen from "username-gen";
import React from "react";

function UserName({
  classes,
  username,
  setUsername,
  avatar,
  setAvatar,
  newAvatar,
}) {
  return (
    <div>
      <Box mb={4}>
        <Typography variant="h1" align="center" className={classes.h1Override}>
          Please fill out your details so we can provide you with the best
          possible help
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" flexWrap="wrap" mb={4}>
        <Grid>
          <Typography variant="h6" align="left" gutterBottom>
            Username
          </Typography>
          <Box mb={2}>
            <Typography variant="h6" gutterBottom>
              {username}
            </Typography>
          </Box>

          <Button
            onClick={() =>
              setUsername(
                usernameGen
                  .generateUsername(Math.floor(Math.random() * 4 + 6), false)
                  .toUpperCase()
              )
            }
            variant="outlined"
            color="primary"
          >
            New Username
          </Button>
        </Grid>
      </Box>

      <Box display="flex" flexDirection="column" flexWrap="wrap" mb={4}>
        <Grid>
          <Typography variant="h6" align="left" gutterBottom>
            Select an Avatar
          </Typography>
          <Grid container className={classes.root} justifyContent="center">
            <CardMedia
              className={classes.image}
              component="img"
              image={avatar}
              title="Avatar"
              onClick={() => setAvatar(newAvatar())}
            />
          </Grid>
          <Button
            onClick={() => setAvatar(newAvatar())}
            variant="outlined"
            color="primary"
          >
            New Avatar
          </Button>
        </Grid>
      </Box>
    </div>
  );
}
export default UserName;
