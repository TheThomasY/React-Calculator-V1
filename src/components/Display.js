import React, { useState } from 'react';

import './Display.css';

const Display = (props) => {
  let displayThis = props.currentCalc.firstNumber;

  if (props.currentCalc.result !== '') {
    displayThis = props.currentCalc.result;
  }

  if (displayThis.length > 12) {
    displayThis = parseFloat(displayThis).toExponential();
  }

  return (
    <input type='text' className='calc-display' value={displayThis} disabled />
  );
};

export default Display;
