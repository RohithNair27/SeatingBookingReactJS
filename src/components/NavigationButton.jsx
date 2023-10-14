import React from "react";
import "../styles/componentStyles/Button.css";
import { Link } from "react-router-dom";
function Button({ placeHolder, isNavigate, onPress }) {
  return (
    <>
      {isNavigate ? (
        <Link to={"./home"} className="btn-submit">
          <p>{placeHolder}</p>
        </Link>
      ) : (
        <button className="btn-submit" onClick={() => onPress()}>
          <p>{placeHolder}</p>
        </button>
      )}
    </>
  );
}

export default Button;
