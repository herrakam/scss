import React from "react";
import "./Button.scss";
import classnames from "classnames";

function Button({ children, size, color }) {
  return (
    <>
      <button className={classnames("Button", size, color)}>{children}</button>
    </>
  );
}
Button.defaultProps = {
  size: "medium",
  color: "blue",
};
export default Button;
