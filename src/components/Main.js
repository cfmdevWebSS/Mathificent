import React from "react";
import PlayButton from "./PlayButton";
import SelectInput from "./SelectInput";

function Main(props) {
  const operations = ["+", "x", "/", "-"];
  const numbers = [];

  for (let number = 2; number <= 100; number++) {
    numbers.push(number);
  }
  return (
    <main>
      <SelectInput
        label="Operation"
        id="operation"
        currentValue={props.operation}
        setCurrentValue={props.setOperation}
        value={operations}
      />
      <SelectInput
        label="Maximum Number"
        id="max-number"
        currentValue={props.maxNumber}
        setCurrentValue={props.setMaxNumber}
        value={numbers}
      />
      <PlayButton />
    </main>
  );
}

export default Main;
