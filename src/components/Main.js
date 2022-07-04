import React from "react";
import PlayButton from "./PlayButton";
import SelectInput from "./SelectInput";
import "./Main.css";

function Main(props) {
  const operations = [
    ["Addition", "+"],
    ["Subtraction", "-"],
    ["Multiplication", "x"],
    ["Division", "."],
  ];
  const numbers = [];

  for (let number = 2; number <= 100; number++) {
    numbers.push([number, number]);
  }
  return (
    <main>
      <div className="row mx-1 my-3">
        <SelectInput
          label="Operation"
          id="operation"
          currentValue={props.operation}
          setCurrentValue={props.setOperation}
          value={operations}
        />
      </div>
      <div className="row mx-1 my-3">
        <SelectInput
          label="Maximum Number"
          id="max-number"
          currentValue={props.maxNumber}
          setCurrentValue={props.setMaxNumber}
          value={numbers}
        />
      </div>
      <div className="row mx-1 my-3">
        <PlayButton />
      </div>
    </main>
  );
}

export default Main;
