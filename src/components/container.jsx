import React from "react";

function Container({ children, className = "" }) {
  return (
    <div
      className={`bg-dark text-light ${
        className ? "" : "py-5"
      } animate__animated animate__fadeIn ${className}`}
    >
      <div className="container">{children}</div>
    </div>
  );
}

export default Container;
