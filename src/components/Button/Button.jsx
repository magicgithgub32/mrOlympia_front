import "./Button.css";
import React from "react";

const Button = ({ buttonText, className }) => {
  return (
    <button type="submit" className={className}>
      {buttonText}
    </button>
  );
};

export default Button;
