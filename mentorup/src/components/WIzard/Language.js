import React from "react";
import { Grid, MenuItem, TextField, Typography, Box } from "@material-ui/core";
import uk from "./../../assets/flags/united-kingdom.svg";
import uae from "./../../assets/flags/united-arab-emirates.svg";
// import bangladesh from "./../assets/flags/bangladesh.svg"
import france from "./../../assets/flags/france.svg";
import germany from "./../../assets/flags/germany.svg";
import india from "./../../assets/flags/india.svg";
import italy from "./../../assets/flags/italy.svg";
import lithuania from "./../../assets/flags/lithuania.svg";
import poland from "./../../assets/flags/poland.svg";
// import portugal from "./../../assets/flags/portugal.svg";
import pakistan from "./../../assets/flags/pakistan.svg";
// import romania from "./../../assets/flags/romania.svg";
import somalia from "./../../assets/flags/somalia.svg";
import spain from "./../../assets/flags/spain.svg";
import philippines from "./../../assets/flags/philippines.svg";
import turkey from "./../../assets/flags/turkey.svg";
const languages = [
  { language: "English", flag: uk },
  { language: "Arabic", flag: uae },
  // { language: "Bengali", flag: bangladesh },
  { language: "French", flag: france },
  { language: "German", flag: germany },
  { language: "Gujurati", flag: india },
  { language: "Hindi", flag: india },
  { language: "Italian", flag: italy },
  { language: "Lithuanian", flag: lithuania },
  { language: "Polish", flag: poland },
  // { language: "Portuguese", flag: portugal },
  { language: "Punjabi", flag: pakistan },
  // { language: "Romanian", flag: romania },
  { language: "Somali", flag: somalia },
  { language: "Spanish", flag: spain },
  { language: "Tagalog/Filipino", flag: philippines },
  { language: "Turkey", flag: turkey },
  { language: "Urdu", flag: pakistan },
];

function Language({ setLanguage, language, classes }) {
  return (
    <div>
      <Box mb={3}>
        <Typography variant="h5" align="left">
          What language do you speak?
        </Typography>
        <Typography variant="h6" align="left">
          We will provide support for you
        </Typography>
      </Box>
      <Grid item>
        <TextField
          id="language"
          label="Select a Language"
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          select
          fullWidth
          required
        >
          {languages.map(({ language, flag, index }) => (
            <MenuItem value={language} className={classes.hover} key={index}>
              <Box
                display="flex"
                justifyContent="space-between"
                width="50%"
                alignItems="center"
              >
                <Box>
                  <img src={flag} width="50px" height="50px" alt={language} />
                </Box>
                <Box>{language}</Box>
              </Box>
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </div>
  );
}
export default Language;
