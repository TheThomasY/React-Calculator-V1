import React, { useState } from "react";

import "./MiniDisplay.css";

const MiniDisplay = (props) => {
  let currentCalc = props.currentCalc;
  let miniOutput = "";

  if (currentCalc.operator !== "" && currentCalc.firstNumber === "") {
    miniOutput = currentCalc.operator;
  }

  return (
    <input
      type="text"
      className="calc-mini-display"
      value={miniOutput}
      disabled
    />
  );
};

export default MiniDisplay;
