import React, { useState } from "react";

function Userform() {
  //Steps
  const [activeSteps, setActiveSteps] = useState(0);
  const getSteps = () => {
    return [
      "UsernameAvatar",
      "MentorMentee",
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
  //Navigates to the next pageBreakAfter:

  const handleNext = () => {
    setActiveSteps((nextStep) => nextStep + 1);
  };
  return <div></div>;
}

export default Userform;
