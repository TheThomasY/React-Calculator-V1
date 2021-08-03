import React, { useState } from "react";

import "./MiniDisplay.css";

const MiniDisplay = (props) => {
  let currentCalc = props.currentCalc;
  let prevResult = props.currentCalc.prevResult;
  let miniOutput = "";

  if (currentCalc.operator !== "") {
    if (currentCalc.result === "") {
      miniOutput = currentCalc.secondNumber + currentCalc.operator;
    } else if (prevResult === "") {
      miniOutput =
        currentCalc.secondNumber +
        currentCalc.operator +
        currentCalc.firstNumber +
        " =";
    } else {
      miniOutput =
        prevResult + currentCalc.operator + currentCalc.firstNumber + " =";
    }
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
