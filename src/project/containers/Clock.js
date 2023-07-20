import React from "react";

const Clock = () => {
  return (
    <div className="bg-success text-center text-light">
      <h4>{new Date().getDate()}</h4>
      <button>Stop</button>
    </div>
  );
};

export default Clock;
