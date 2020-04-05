import React, { useState, useEffect, useCallback, memo } from "react";

//memo => function caching like something.
//means: as long a compute and count doesn't change, please don't re-render it

const ExpensiveComputationComponent = memo(({ compute, count }) => {
  return (
    <div>
      <h1>computed: {compute(count)}</h1>
      <h4>last re-render {new Date().toLocaleTimeString()}</h4>
    </div>
  );
});

const CallbackComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(1);
  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return (
    <div>
      <h1>useCallback Example {time.toLocaleTimeString()}</h1>
      <button onClick={() => setCount(count + 1)}>
        current count: {count}
      </button>
      <ExpensiveComputationComponent
        compute={useCallback(fibonacci, [])} //this means its the same fibonacci function and nothing has changed.
        //compute={fibonacci} //This would work as well, but this would rerun the fibonacci function every time the component gets re-rendered
        count={count}
      />
    </div>
  );
};

export default CallbackComponent;
