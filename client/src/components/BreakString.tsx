import React from "react";

const BreakString = ({ text }) => {
  return (
    <>
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export default BreakString;
