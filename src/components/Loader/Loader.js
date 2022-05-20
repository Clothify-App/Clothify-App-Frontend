import React from "react";

export default function Loader({ size }) {
  return (
    <div
      style={{
        width: size + "px",
        height: size + "px",
        border: size / 7 + "px",
        borderColor: "#f9a8d4",
        borderTopColor: "#ec4899",
        borderStyle: "solid",
        borderRadius: "50%",
      }}
      className="animate-spin"
    ></div>
  );
}
