import React from "react";
import { Box, Typography } from "@material-ui/core";

const MentorProfile = ({ imageSrc, name }) => {
  return (
    <div>
      <Box border={1} p={1} m={1} display="inline-block">
        <img src={imageSrc} alt="Mentor"></img>
        <Typography variant="h6">{name}</Typography>
      </Box>
    </div>
  );
};

export default MentorProfile;
