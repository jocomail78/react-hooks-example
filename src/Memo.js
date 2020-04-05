import React, { useState, useMemo } from "react";

const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  //useMemo is like a cache. Give a function how to calculate the value, and
  //enumerate the parameters which affect the function, so if these parameters change
  //it will recalculate the value of the memo and will assign it to the variable "fib"

  //basically: once calculated it will be stored until the affecting parameters are the same,
  //even if the component will be re-rendered.
  const fib = useMemo(() => fibonacci(num), [num]);
  //const fib = fibonacci(num);

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useMemo Example
      </h1>
      <h2>
        Fibonacci of {num} is {fib}
      </h2>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </div>
  );
};

export default MemoComponent;
