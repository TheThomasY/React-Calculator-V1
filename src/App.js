import Display from "./components/Display";
import MiniDisplay from "./components/MiniDisplay";
import CalcButton from "./components/CalcButton";
import React, { useState } from "react";

import "./App.css";

function App() {
  const [currentCalc, setCurrentCalc] = useState({
    firstNumber: "0",
    operator: "",
    secondNumber: "",
  });

  const numberPressedHandler = (buttonValue) => {
    if (buttonValue === "." && currentCalc.firstNumber.includes(".")) {
      buttonValue = "";
    }
    if (buttonValue === "0" && currentCalc.firstNumber === "0") {
      buttonValue = "";
    }

    if (buttonValue === "all-clear") {
      setCurrentCalc({
        firstNumber: "0",
        operator: "",
        secondNumber: "",
      });
    } else if (
      currentCalc.firstNumber === "0" &&
      buttonValue !== "." &&
      buttonValue !== ""
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
      return {
        firstNumber: "",
        operator: operator,
        secondNumber: prevCalc.firstNumber,
      };
    });
  };

  const enterPressedHandler = () => {
    setCurrentCalc((prevCalc) => {
      const number1 = parseFloat(prevCalc.firstNumber);
      const number2 = parseFloat(prevCalc.secondNumber);
      let result = 0;

      switch (prevCalc.operator) {
        case "+":
          result = number2 + number1;
          break;
        case "-":
          result = number2 - number1;
          break;
        case "x":
          result = number2 * number1;
          break;
        case "/":
          result = number2 / number1;
          break;
      }

      result = result.toString();
      if (result.length > 12) result = result.slice(0, 12);

      return {
        firstNumber: result,
        operator: prevCalc.operator,
        secondNumber: prevCalc.secondNumber,
      };
    });
  };

  return (
    <div className="calc">
      <Display currentCalc={currentCalc} />
      <MiniDisplay currentCalc={currentCalc} />
      <CalcButton
        onNumberPressed={numberPressedHandler}
        onOperatorPressed={operatorPressedHandler}
        onEnterPressed={enterPressedHandler}
      />
    </div>
  );
}

export default App;
