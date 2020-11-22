import React from "react";

const StackLines = () => {
  const values = [20, 80, 30, 60, 50, 15];
  return (
    <div className="center v-center">
      <div className="flex space-between">
        {values.map((e, i) => (
          <div key={i} className="stack-holder">
            <div className="stack" style={{ height: e }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackLines;
