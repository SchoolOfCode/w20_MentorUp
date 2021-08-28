import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button } from "@material-ui/core";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Landing from "./components/Landing/Landing";
import PickYourMentor from "./components/PickYourMentor/PickYourMentor";
import Dashboard from "./components/Dashboard/Dashboard";
import ContactForm from "./components/contact-form/contact";
import "./App.css";
import "firebase/firestore";
import { useFirestoreDocData, useFirestore } from "reactfire";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/landing" component={Landing}></Route>
          <Route path="/contact/:mentorID" component={ContactForm}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
