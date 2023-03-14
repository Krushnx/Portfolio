import React from "react";

function Bubble(props) {
  return (
    <div id="hello">
      <p>{props.value}</p>
      <div className="gle"></div>
    </div>
  );
}

export default Bubble;
