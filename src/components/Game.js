import React, { useState } from "react";
import Score from "./Score";
import Timer from "./Timer";
import Equation from "./Equation";
import NumberButton from "./NumberButton";
import ClearButton from "./ClearButton";
import "./Game.css";
import { randInt } from "../helpers/helpers";

function Game(operation, maxNumber) {
  let randNums = getRandNumbers(operation, 0, maxNumber);
  const [operands, setOperands] = useState(randNums);
  const question = operands.num1 + " " + operation + " " + operands.num2;

  function getRandNumbers(operator, low, high) {
    let num1 = randInt(low, high);
    let num2 = randInt(low, high);
    const numHigh = Math.max(num1, num2);
    const numLow = Math.min(num1, num2);

    if (operator === "-") {
      num1 = numHigh;
      num2 = numLow;
    }

    if (operator === "/") {
      if (num2 === 0) {
        //no division by zero
        num2 = randInt(1, high);
      }

      num1 = num1 * num2;
    }
    return { num1, num2 };
  }
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const numberButtons = numbers.map((number) => (
  //   <NumberButton value={number} key={number} />
  // ));

  return (
    <main className="text-center" id="game-container">
      <div className="row border-bottom" style={{ fontSize: "1.5em" }}>
        <div className="col px-3 text-left">
          <Score score="0" />
        </div>
        <div className="col px-3 text-right">
          <Timer timeLeft="60" />
        </div>
      </div>
      <div className="row text-secondary my-2" id="equation">
        <Equation question={question} answer="2" />
      </div>
      <div className="row" id="buttons">
        <div className="col">
          {/* {numberButtons} */}
          <ClearButton />
        </div>
      </div>
    </main>
  );
}

export default Game;
