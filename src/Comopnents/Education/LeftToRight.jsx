import React from "react";


function ColorChangingText(props) {
  return (
    <div className="text-container">
      <h1 className="color-changing-text">{props.value}</h1>
    </div>
  );
}

export default ColorChangingText;