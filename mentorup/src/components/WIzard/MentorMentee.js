import {
  Typography,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

import React from "react";
function MentorMentee({ menteeOrMentor, setMenteeOrMentor }) {
  return (
    <div>
      <Box mb={3}>
        <Typography variant="h5" align="left">
          Are you a Mentor or Mentee?
        </Typography>
      </Box>

      <RadioGroup aria-label="mentorormentee" name="mentorormentee">
        <FormControlLabel
          value={menteeOrMentor}
          control={<Radio color="primary" />}
          label="Mentee"
          checked={menteeOrMentor === "Mentee"}
          onChange={(e) => setMenteeOrMentor("Mentee")}
          labelPlacement="start"
          style={{
            justifyContent: "space-between",
            margin: "0",
            marginBottom: "20px",
            padding: "16px",
            display: "flex",
          }}
        />
        <FormControlLabel
          value={menteeOrMentor}
          control={<Radio color="primary" />}
          label="Mentor"
          checked={menteeOrMentor === "Mentor"}
          onChange={(e) => setMenteeOrMentor("Mentor")}
          labelPlacement="start"
          style={{
            justifyContent: "space-between",
            margin: "0px",
            padding: "16px",
            display: "flex",
          }}
        />
      </RadioGroup>
    </div>
  );
}

export default MentorMentee;
