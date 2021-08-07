import React from "react";
import "./Button.scss";
import classnames from "classnames";

function Button({ children, size, color, outline, fullWidth }) {
  return (
    <>
      <button
        className={classnames("Button", size, color, { outline, fullWidth })}
      >
        {children}
      </button>
    </>
  );
}
Button.defaultProps = {
  size: "medium",
  color: "blue",
};
export default Button;
