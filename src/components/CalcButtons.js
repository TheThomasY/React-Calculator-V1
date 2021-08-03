import "./CalcButtons.css";
import React from "react";

const CalcButton = (props) => {
  const numberClickedHandler = (event) => {
    props.onNumberPressed(event.target.value);
  };

  const operatorClickedHandler = (event) => {
    props.onOperatorPressed(event.target.value);
  };

  const enterClickedHandler = () => {
    props.onEnterPressed();
  };

  return (
    <div className="calc-card">
      <button
        type="button"
        className="operator"
        value="+"
        onClick={operatorClickedHandler}
      >
        +
      </button>
      <button
        type="button"
        className="operator"
        value="-"
        onClick={operatorClickedHandler}
      >
        -
      </button>
      <button
        type="button"
        className="operator"
        value="x"
        onClick={operatorClickedHandler}
      >
        &times;
      </button>
      <button
        type="button"
        className="operator"
        value="/"
        onClick={operatorClickedHandler}
      >
        &divide;
      </button>

      <button type="button" value="7" onClick={numberClickedHandler}>
        7
      </button>
      <button type="button" value="8" onClick={numberClickedHandler}>
        8
      </button>
      <button type="button" value="9" onClick={numberClickedHandler}>
        9
      </button>

      <button type="button" value="4" onClick={numberClickedHandler}>
        4
      </button>
      <button type="button" value="5" onClick={numberClickedHandler}>
        5
      </button>
      <button type="button" value="6" onClick={numberClickedHandler}>
        6
      </button>

      <button type="button" value="1" onClick={numberClickedHandler}>
        1
      </button>
      <button type="button" value="2" onClick={numberClickedHandler}>
        2
      </button>
      <button type="button" value="3" onClick={numberClickedHandler}>
        3
      </button>

      <button type="button" value="0" onClick={numberClickedHandler}>
        0
      </button>
      <button
        type="button"
        className="decimal"
        value="."
        onClick={numberClickedHandler}
      >
        .
      </button>
      <button
        type="button"
        className="all-clear"
        value="all-clear"
        onClick={numberClickedHandler}
      >
        AC
      </button>

      <button
        type="button"
        className="equal-sign"
        value="="
        onClick={enterClickedHandler}
      >
        =
      </button>
    </div>
  );
};

export default CalcButton;
