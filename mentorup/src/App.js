import React, { useState } from "react";
import "./App.css";

import MentorOrMentee from "./components/MentorOrMentee/MentorOrMentee";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Landing from "./components/Landing/Landing";
import PickYourMentor from "./components/PickYourMentor/PickYourMentor";
import MatchWithMentor from "./components/MatchWithMentor/MatchWithMentor";
import Dashboard from "./components/Dashboard/Dashboard";
import ContactForm from "./components/contact-form/contact";
import "./App.css";
import "firebase/firestore";
import heroimage from "./assets/heroimage.jpg";
import UserDetails from "./components/UserDetails/UserDetails";
import UsernameAndAvatar from "./components/UsernameAndAvatar/UsernameAndAvatar";
import UsernameAvatar from "./components/WIzard/UsernameAvatar";
import MentorMentee from "./components/WIzard/MentorMentee";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/landing" component={Landing}></Route>
          <Route path="/mentor-or-mentee" component={MentorOrMentee}></Route>
          <Route path="/username-avatar" component={UsernameAndAvatar}></Route>
          <Route path="/contact/:mentorID" component={ContactForm}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/match-with-mentor" component={MatchWithMentor}></Route>
          {/* <Route path="/user-details" component={UserDetails}></Route> */}
          {/* <Route path="/user-details" component={UsernameAvatar}></Route> */}
          <Route path="/user-details" component={MentorMentee}></Route>
        </Switch>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <img src={heroimage} alt="bottom illustration" width="50%"></img>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
