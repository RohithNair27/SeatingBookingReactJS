import React, { useState } from "react";
import "./Slider.css";
function Slider() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="slider" />
    </label>
  );
}

export default Slider;
