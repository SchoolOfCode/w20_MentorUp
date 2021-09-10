import React, { useState } from "react";

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
  const handlBack = () => {
    setActiveSteps((previousStep) => previousStep - 1);
  };
  //Handle form value states on change
  const handleChange = (input) => (e) => {
    setMultiFormValues({ ...multiFormValues, [input]: e.target.value });
  };
  return <div></div>;
}

export default Userform;
