import React from "react";
import {
  Grid,
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
      <Grid item>
        <Typography variant="h5" align="left">
          Do you need a British Sign Language interpreter?
        </Typography>
      </Grid>
      <RadioGroup aria-label="mentorormentee" name="mentorormentee">
        <FormControlLabel
          value="Yes"
          control={<Radio color="primary" />}
          label="Yes"
          checked={needsSignLanguageInterpreter === true}
          onChange={(e) => setNeedsSignLanguageInterpreter(true)}
          labelPlacement="start"
          style={{
            justifyContent: "center",
            margin: "0",
            padding: "16px",
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
            justifyContent: "center",
            margin: "0",
            padding: "16px",
          }}
        />
      </RadioGroup>
    </div>
  );
}
export default BSL;
