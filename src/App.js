import Display from './components/Display';
import MiniDisplay from './components/MiniDisplay';
import CalcButtons from './components/CalcButtons';
import React, { useState } from 'react';

import './App.css';

function App() {
  const [currentCalc, setCurrentCalc] = useState({
    firstNumber: '0',
    operator: '',
    secondNumber: '',
    result: '',
    prevResult: '',
  });

  const numberPressedHandler = (buttonValue) => {
    // First two if statements prevent nonsensical inputs
    if (buttonValue === '.' && currentCalc.firstNumber.includes('.')) {
      buttonValue = '';
    }
    if (buttonValue === '0' && currentCalc.firstNumber === '0') {
      buttonValue = '';
    }

    if (buttonValue === 'all-clear') {
      setCurrentCalc({
        firstNumber: '0',
        operator: '',
        secondNumber: '',
        result: '',
        prevResult: '',
      });
    } else if (
      currentCalc.firstNumber === '0' &&
      buttonValue !== '.' &&
      buttonValue !== ''
    ) {
      setCurrentCalc((prevCalc) => {
        return { ...prevCalc, firstNumber: buttonValue };
      });
    } else {
      setCurrentCalc((prevCalc) => {
        return { ...prevCalc, firstNumber: prevCalc.firstNumber + buttonValue };
      });
    }
  };

  const operatorPressedHandler = (operator) => {
    setCurrentCalc((prevCalc) => {
      let prevResult = '';

      if (prevCalc.result !== '') {
        prevResult = prevCalc.result;
      }

      return {
        ...prevCalc,
        firstNumber: '',
        operator: operator,
        secondNumber: prevCalc.firstNumber,
        prevResult: prevResult,
      };
    });
  };

  const enterPressedHandler = () => {
    setCurrentCalc((prevCalc) => {
      if (prevCalc.firstNumber === '0') return { ...prevCalc };

      const number1 = parseFloat(prevCalc.firstNumber);
      let number2 = parseFloat(prevCalc.secondNumber);
      let calc = 0;

      if (prevCalc.result !== '') {
        // If there is already a result, use that in the calculation
        number2 = parseFloat(prevCalc.result);
      }

      switch (prevCalc.operator) {
        case '+':
          calc = number2 + number1;
          break;
        case '-':
          calc = number2 - number1;
          break;
        case 'x':
          calc = number2 * number1;
          break;
        case '/':
          calc = number2 / number1;
          break;
      }

      calc = calc.toString();

      return { ...prevCalc, result: calc, prevResult: prevCalc.result };
    });
  };

  return (
    <div className='calc'>
      <MiniDisplay currentCalc={currentCalc} />
      <Display currentCalc={currentCalc} />
      <CalcButtons
        onNumberPressed={numberPressedHandler}
        onOperatorPressed={operatorPressedHandler}
        onEnterPressed={enterPressedHandler}
      />
    </div>
  );
}

export default App;
