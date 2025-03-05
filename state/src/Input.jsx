import { useState } from "react";
function Input(props) {
  const { email, choco } = props;
  return (
    <>
      <span style={{}}>{email}</span>
      <div
        style={{
          padding: "5px 10px",
          border: "1px solid #efefef",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          onChange={choco}
          style={{ outline: "none", border: "0", width: "100%" }}
          type="text"
        />
      </div>
    </>
  );
}

export default Input;
