import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header/Header";
// import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
