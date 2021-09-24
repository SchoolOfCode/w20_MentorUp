import React from "react";
import {
  Box,
  FormControlLabel,
  RadioGroup,
  Typography,
  Radio,
} from "@material-ui/core";

function BSL({
  needsSignLanguageInterpreter,
  setNeedsSignLanguageInterpreter,
}) {
  return (
    <div>
      <Box mb={3}>
        <Typography variant="h5" align="left">
          Do you need a British Sign Language interpreter?
        </Typography>
      </Box>

      <RadioGroup aria-label="bsl" name="bsl">
        <FormControlLabel
          value="Yes"
          control={<Radio color="primary" />}
          label="Yes"
          checked={needsSignLanguageInterpreter === true}
          onChange={(e) => setNeedsSignLanguageInterpreter(true)}
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
          value="No"
          control={<Radio color="primary" />}
          label="No"
          checked={needsSignLanguageInterpreter === false}
          onChange={(e) => setNeedsSignLanguageInterpreter(false)}
          labelPlacement="start"
          style={{
            justifyContent: "space-between",
            margin: "0",
            padding: "16px",
            display: "flex",
          }}
        />
      </RadioGroup>
    </div>
  );
}
export default BSL;
