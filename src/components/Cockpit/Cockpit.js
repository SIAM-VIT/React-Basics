import React from "react";

const Cockpit = props => {
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div>
      <h1>Hi I'm a React App</h1>
      <p>This is really working</p>
      <button style={style} onClick={props.Clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default Cockpit;
