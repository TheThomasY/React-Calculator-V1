import React, { useState } from "react";

import "./Display.css";

const Display = (props) => {
  const currentCalc = props.currentCalc;

  return (
    <input
      type="text"
      className="calc-display"
      value={currentCalc.firstNumber}
      disabled
    />
  );
};

export default Display;
