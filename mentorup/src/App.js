import React from "react";
import { Button } from "@material-ui/core";
import Landing from "./components/Landing/Landing";
import PickYourMentor from "./components/PickYourMentor/PickYourMentor";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App" width="360px">
      <Header></Header>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
