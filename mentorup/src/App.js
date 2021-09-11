import React from "react";
import MentorOrMentee from "./components/MentorOrMentee/MentorOrMentee";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Homepage/Homepage";
import Landing from "./components/Landing/Landing";
import MatchWithMentor from "./components/MatchWithMentor/MatchWithMentor";
import Dashboard from "./components/Dashboard/Dashboard";
import ContactForm from "./components/contact-form/contact";
import "./App.css";
import "firebase/firestore";
import UserDetails from "./components/UserDetails/UserDetails";
import UsernameAndAvatar from "./components/UsernameAndAvatar/UsernameAndAvatar";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/landing" component={Landing}></Route>
            <Route path="/mentor-or-mentee" component={MentorOrMentee}></Route>
            <Route path="/username-avatar" component={UsernameAndAvatar}></Route>
            <Route path="/contact/:mentorID" component={ContactForm}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/match-with-mentor" component={MatchWithMentor}></Route>
            <Route path="/user-details" component={UserDetails}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
