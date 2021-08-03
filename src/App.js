import Display from "./components/Display";
import MiniDisplay from "./components/MiniDisplay";
import CalcButtons from "./components/CalcButtons";
import React, { useState } from "react";

import "./App.css";

function App() {
  const [currentCalc, setCurrentCalc] = useState({
    firstNumber: "0",
    operator: "",
    secondNumber: "",
    result: "",
    prevResult: "",
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
        result: "",
        prevResult: "",
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
        ...prevCalc,
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
      let calc = 0;
      let oldResult = "";

      if (prevCalc.result === "") {
        switch (prevCalc.operator) {
          case "+":
            calc = number2 + number1;
            break;
          case "-":
            calc = number2 - number1;
            break;
          case "x":
            calc = number2 * number1;
            break;
          case "/":
            calc = number2 / number1;
            break;
        }
      } else {
        oldResult = parseFloat(prevCalc.result);
        console.log("oldResult:", oldResult);

        switch (prevCalc.operator) {
          case "+":
            calc = oldResult + number1;
            break;
          case "-":
            calc = oldResult - number1;
            break;
          case "x":
            calc = oldResult * number1;
            break;
          case "/":
            calc = oldResult / number1;
            break;
        }
      }

      calc = calc.toString();
      if (calc.length > 12) calc = calc.slice(0, 12);

      return { ...prevCalc, result: calc, prevResult: oldResult.toString() };
    });
  };

  return (
    <div className="calc">
      <Display currentCalc={currentCalc} />
      <MiniDisplay currentCalc={currentCalc} />
      <CalcButtons
        onNumberPressed={numberPressedHandler}
        onOperatorPressed={operatorPressedHandler}
        onEnterPressed={enterPressedHandler}
      />
    </div>
  );
}

export default App;
