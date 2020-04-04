import React, { useState } from "react";

const StateComponent = () => {
  const [isGreen, setIsGreen] = useState(true);
  const [buttonLabel, setButtonLabel] = useState("This");

  return (
    <button
      onClick={() => setIsGreen(!isGreen)}
      onMouseEnter={() =>
        setButtonLabel(buttonLabel === "This" ? "That" : "This")
      }
      style={{ color: isGreen ? "limegreen" : "crimson" }}
    >
      useState Example {buttonLabel}
    </button>
  );
};

export default StateComponent;
