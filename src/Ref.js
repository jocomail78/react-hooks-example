import React, { useState, useEffect, useRef } from "react";

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);
  // useRef can be anything, like a timeout function variable, a dom element, basically anything.
  // But it cannot be extended, so the only prop available is the .current

  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);
    console.log(numRef);
    numRef.current = numRef.current + 10;
    console.log(numRef);
    //The stateNumber variable at this point is whatever it was when the incrementAndDelayLogging function was called.
    //Even if I'm changing it in the function, it will have the initial value of it.
    setTimeout(
      () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
      1000
    );
  }

  return (
    <div>
      <h1>useRef Example</h1>
      <button onClick={incrementAndDelayLogging}>delay logging</button>
      <h4>state: {stateNumber}</h4>
      <h4>ref: {numRef.current}</h4>
    </div>
  );
};

export default RefComponent;
