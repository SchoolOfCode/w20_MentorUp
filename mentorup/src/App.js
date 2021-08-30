import React from "react";

import "./App.css";

import ElevatorPitch from "./components/ElevatorPitch/ElevatorPitch";

import BSLSelection from "./components/BSLSelection/BSLSelection";

import LanguageSelection from "./components/LanguageSelection/LanguageSelection";

import Helpselection from "./components/Helpselection/Helpselection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Landing from "./components/Landing/Landing";
import PickYourMentor from "./components/PickYourMentor/PickYourMentor";
import MatchWithMentor from "./components/MatchWithMentor/MatchWithMentor";
import Dashboard from "./components/Dashboard/Dashboard";
import ContactForm from "./components/contact-form/contact";
import "./App.css";
import "firebase/firestore";
import { useFirestoreDocData, useFirestore } from "reactfire";
import heroimage from "./assets/heroimage.jpg";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/landing" component={Landing}></Route>
          <Route path="/contact/:mentorID" component={ContactForm}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/match-with-mentor" component={MatchWithMentor}></Route>
          <Route path="/help-selection" component={Helpselection}></Route>
          <Route path="/bsl-selection" component={BSLSelection}></Route>
          <Route path="/elevator-pitch" component={ElevatorPitch}></Route>
          <Route
            path="/language-selection"
            component={LanguageSelection}
          ></Route>
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
