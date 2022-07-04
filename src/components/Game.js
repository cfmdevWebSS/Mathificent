import React from "react";
import Score from "./Score";
import Timer from "./Timer";
import Equation from "./Equation";
import NumberButton from "./NumberButton";
import ClearButton from "./ClearButton";
import "./Game.css";

function Game(props) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numberButtons = numbers.map((number) => (
    <NumberButton value={number} key={number} />
  ));

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
        <Equation question="1 + 1" answer="2" />
      </div>
      <div className="row" id="buttons">
        <div className="col">
          {numberButtons}
          <ClearButton />
        </div>
      </div>
    </main>
  );
}

export default Game;
