import React from "react";
import "./button.css";

const emptyFunc = () => {
  return 0;
};

const Button = ({
  props: { value, func = emptyFunc, item, classes, buttonType = "button" }
}) => {
  return (
    <button type={buttonType} className={classes} onClick={() => func(item)}>
      {value}
    </button>
  );
};

export default Button;
