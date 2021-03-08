import React, { useEffect, useState } from "react";

// const intialState = 0;
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "START":
//       console.log("started");
//       var interval = setInterval(() => {
//         state++;
//       }, 1000);
//       return state;
//     case "STOP":
//       clearInterval(interval);
//       return state;
//     default:
//       return state;
//   }
// };

const SimpleCounter = () => {
  // const [state, dispatch] = useReducer(reducer, intialState);
  const [count, setCount] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);
  useEffect(() => {
    let interval = null;
    if (isTimerOn) {
      interval = setInterval(() => {
        setCount(count + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });
  return (
    <div className="container">
      <h3>
        {(`0` + Math.floor((count / 60000) % 60)).slice(-2)}:
        {(`0` + Math.floor((count / 1000) % 60)).slice(-2)}:
        {(`0` + ((count / 10) % 100)).slice(-2)}
      </h3>
      <div className="button-container">
        {!isTimerOn && count === 0 && (
          <button className="btn" onClick={() => setIsTimerOn(true)}>
            start
          </button>
        )}
        {isTimerOn && (
          <button className="btn" onClick={() => setIsTimerOn(false)}>
            stop
          </button>
        )}
        {!isTimerOn && count !== 0 && (
          <button className="btn" onClick={() => setIsTimerOn(true)}>
            resume
          </button>
        )}
        {!isTimerOn && count > 0 && (
          <button className="btn" onClick={() => setCount(0)}>
            reset
          </button>
        )}
      </div>
    </div>
  );
};
export default SimpleCounter;
