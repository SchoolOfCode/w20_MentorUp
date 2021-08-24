import React from "react";
import { Button } from "@material-ui/core";
import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
