import React, { useState } from "react";
import MentorMentee from "./MentorMentee";
import UsernameAvatar from "./UsernameAvatar";
import Subject from "./Subject";
import { Button } from "@material-ui/core";
function Userform() {
  //Steps
  const [activeSteps, setActiveSteps] = useState(0);
  const getSteps = () => {
    return [
      "UsernameAvatar",
      "MentorMentee",
      "Subject",
      "BusinessStage",
      "Industry",

      "BSL",
      "Language",
    ];
  };
  const steps = getSteps();
  //State variables
  const [multiFormValues, setMultiFormValues] = useState({
    username: "",
    avatar: "",
    mentorMentee: "",
    subject: "",
    industry: "",
    businessStage: "",
    yearsInBusiness: "",
    language: "",
  });
  //Navigates to the next page

  const handleNext = () => {
    setActiveSteps((nextStep) => nextStep + 1);
  };
  //Navigates to the previous page
  const handleBack = () => {
    setActiveSteps((previousStep) => previousStep - 1);
  };
  //Handle form value states on change
  const handleChange = (input) => (e) => {
    setMultiFormValues({ ...multiFormValues, [input]: e.target.value });
  };
  return (
    <div>
      {activeSteps === 0 && <UsernameAvatar handleChange={handleChange} />}
      {activeSteps === 1 && (
        <MentorMentee values={multiFormValues} handleChange={handleChange} />
      )}
      {activeSteps === 2 && (
        <Subject values={multiFormValues} handleChange={handleChange} />
      )}
      <Button disabled={activeSteps === 0} onClick={handleBack}>
        Back
      </Button>
      <Button disabled={activeSteps === 0} onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}

export default Userform;
