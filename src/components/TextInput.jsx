import React from "react";
import "../styles/componentStyles/TextInput.css";
function TextInput({ placeholder, type, onType, value }) {
  return (
    <>
      <input
        value={value}
        placeholder={placeholder}
        className="textInput"
        type={type}
        onChange={onType}
      />
    </>
  );
}

export default TextInput;
