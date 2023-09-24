import React from "react";
const ChangeButton = ({ stateName, state, setStateValue, total }) => {
  return (
    <div className="change-button">
      <button onClick={state >= 1 ? () => setStateValue(state - 1) : () => {}}>
        ◁
      </button>
      <p>{stateName}</p>
      <button
        onClick={state < total - 1 ? () => setStateValue(state + 1) : () => {}}
      >
        ▷
      </button>
    </div>
  );
};

export default ChangeButton;
