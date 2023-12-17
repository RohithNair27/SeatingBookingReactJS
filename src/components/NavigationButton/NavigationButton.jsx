import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
function Button({ placeHolder, isNavigate, onPress, className }) {
  return (
    <>
      {isNavigate ? (
        <Link className={className} to={"/home"}>
          <p>{placeHolder}</p>
        </Link>
      ) : (
        <button className={className} onClick={() => onPress()}>
          <p>{placeHolder}</p>
        </button>
      )}
    </>
  );
}

export default Button;
