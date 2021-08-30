import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Landing from "./components/Landing/Landing";
import PickYourMentor from "./components/PickYourMentor/PickYourMentor";
import MatchWithMentor from "./components/MatchWithMentor/MatchWithMentor";
import Dashboard from "./components/Dashboard/Dashboard";
import ContactForm from "./components/contact-form/contact";

import Helpselection from "./components/Helpselection/Helpselection";

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
        </Switch>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Typography vairant="h2">Hello</Typography>
        </Grid>
   <div>
      <Helpselection />
    </div>
      </div>
    </Router>

  );
}

export default App;
