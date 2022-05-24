import React from "react";

export default function Loader({
  size,
  borderColor = "#f9a8d4",
  borderTopColor = "#ec4899",
}) {
  return (
    <div
      style={{
        width: size + "px",
        height: size + "px",
        border: size / 9 + "px",
        borderColor: borderColor,
        borderTopColor: borderTopColor,
        borderStyle: "solid",
        borderRadius: "50%",
      }}
      className="animate-spin"
    ></div>
  );
}
