import { useState } from "react";

const ListInput = (props) => {
  const { change, value, button } = props;
  return (
    <div style={{ padding: "20px 0", display: "flex", alignItems: "center" }}>
      <span
        style={{
          fontSize: "30px",
          fontWeight: "700",
          color: "#fff",
        }}
      >
        +
      </span>
      <input
        onChange={change}
        style={{
          width: "100%",
          height: "40px",
          background: "transparent",
          border: "0",
          outline: "0",
          borderBottom: "1px solid #fff",
          fontSize: "20px",
          margin: "10px 10px 0 10px",
        }}
        type="text"
        value={value}
      />
      <button
        onClick={button}
        style={{
          backgroundColor: "#333",
          color: "#fff",
          fontWeight: "700",
          padding: "10px 30px",
        }}
      >
        SEND
      </button>
    </div>
  );
};
export default ListInput;
