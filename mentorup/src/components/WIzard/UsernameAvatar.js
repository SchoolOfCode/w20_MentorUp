import {
  Typography,
  FormControl,
  withStyles,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Grid,
  CardMedia,
} from "@material-ui/core";
import usernameGen from "username-gen";
import React from "react";

function UserName({ classes, username, setUsername, avatar, setAvatar, newAvatar }) {
  return (
    <div>
      <Grid item>
        <Typography variant="h1" align="center" className={classes.h1Override}>
          Please fill out your details so we can provide you with the best possible help
        </Typography>
      </Grid>
      <Grid item className={classes.root}>
        <Typography variant="h5" align="left" gutterBottom>
          Username
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">{username}</Typography>
        <Button
          onClick={() =>
            setUsername(
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
      <Grid item className={classes.root}>
        <Typography variant="h5" align="left" gutterBottom>
          Select an Avatar
        </Typography>
        <Grid item className={classes.root}>
          <CardMedia
            className={classes.image}
            align="center"
            justifyContent="center"
            margin="auto"
            component="img"
            image={avatar}
            title="Avatar"
            onClick={() => setAvatar(newAvatar())}
          ></CardMedia>
        </Grid>
        <Button
          onClick={() => setAvatar(newAvatar())}
          variant="contained"
          color="primary"
          fullWidth
        >
          New Avatar
        </Button>
      </Grid>
    </div>
  );
}
export default UserName;
