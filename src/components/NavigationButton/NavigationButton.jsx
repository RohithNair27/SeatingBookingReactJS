import React from "react";
import "./Button.css";

function Button({ placeHolder, className, navigateLocation, onPress }) {
  return (
    <button className={className} onClick={(event) => onPress(event)}>
      <p>{placeHolder}</p>
    </button>
  );
}

export default Button;
