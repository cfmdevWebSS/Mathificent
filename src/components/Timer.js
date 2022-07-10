import React from "react";

function Timer(props) {
  if (props.timeLeft > 0) {
    setTimeout(() => {
      props.setTimeLeft(props.timeLeft - 1);
    }, 1000);
  }
  return <strong>Time: {props.timeLeft}</strong>;
}

export default Timer;
