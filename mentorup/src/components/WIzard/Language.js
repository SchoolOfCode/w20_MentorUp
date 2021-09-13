import React from "react";
import {
  Grid,
  MenuItem,
  TextField,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    // width: "30ch",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxHeight: 150,
    maxWidth: 150,
  },
  ciao: {
    marginBottom: theme.spacing(3),
  },
  hover: {
    "&:hover, &:focus": {
      background: "#3F51B5",
      color: "#000",
      "&:before": {
        background: "#5767BE",
        transform: "scale(1)",
      },
    },
  },
  mainLayout: {
    // flexDirection: "column",
    // backgroundColor: "green",
    padding: "16px",
  },
  h1Override: {
    fontSize: "1.875rem",
    fontWeight: "medium",
  },
}));
function Language({ setLanguage, language, classes }) {
  return (
    <div>
      <Grid item>
        <Typography variant="h5" align="left">
          What language do you speak?
        </Typography>
        <Typography variant="h6" align="left">
          We will provide support for you
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          id="language"
          label="Select a Language"
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          select
          fullWidth
        >
          {languages.map(({ language, flag, index }) => (
            <MenuItem value={language} className={classes.hover} key={index}>
              <Box width="50px" height="50px  ">
                <img src={flag} alt={language} />
              </Box>
              <Box>{language}</Box>
            </MenuItem>
          ))}
          {/* <MenuItem value="English" className={classes.hover}>
            🇬🇧 English
          </MenuItem>
          <MenuItem value="Arabic" className={classes.hover}>
            Arabic
          </MenuItem>
          <MenuItem value="Bengali" className={classes.hover}>
            Bengali
          </MenuItem>
          <MenuItem value="French" className={classes.hover}>
            🇫🇷 French
          </MenuItem>
          <MenuItem value="German" className={classes.hover}>
            🇩🇪 German
          </MenuItem>
          <MenuItem value="Gujarati" className={classes.hover}>
            Gujarati
          </MenuItem>
          <MenuItem value="Hindi" className={classes.hover}>
            🇮🇳 Hindi
          </MenuItem>
          <MenuItem value="Italian" className={classes.hover}>
            🇮🇹 Italian
          </MenuItem>
          <MenuItem value="Lithuanian" className={classes.hover}>
            🇱🇹 Lithuanian
          </MenuItem>
          <MenuItem value="Persian" className={classes.hover}>
            🇮🇷 Persian/Farsi
          </MenuItem>
          <MenuItem value="Polish" className={classes.hover}>
            🇵🇱 Polish
          </MenuItem>
          <MenuItem value="Portuguese" className={classes.hover}>
            🇵🇹 Portuguese
          </MenuItem>
          <MenuItem value="Punjabi" className={classes.hover}>
            Punjabi
          </MenuItem>
          <MenuItem value="Romanian" className={classes.hover}>
            🇷🇴 Romanian
          </MenuItem>
          <MenuItem value="Somali" className={classes.hover}>
            🇸🇴 Somali
          </MenuItem>
          <MenuItem value="Spanish" className={classes.hover}>
            🇪🇸 Spanish
          </MenuItem>
          <MenuItem value="Tagalog" className={classes.hover}>
            🇵🇭 Tagalog/Filipino
          </MenuItem>
          <MenuItem value="Tamil" className={classes.hover}>
            Tamil
          </MenuItem>
          <MenuItem value="Turkish" className={classes.hover}>
            🇹🇷 Turkish
          </MenuItem>
          <MenuItem value="Urdu" className={classes.hover}>
            🇵🇰 Urdu
          </MenuItem> */}
        </TextField>
      </Grid>
    </div>
  );
}
export default Language;
