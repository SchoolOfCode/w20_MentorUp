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

  return <div></div>;
}

export default Userform;
