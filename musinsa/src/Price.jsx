import { useState } from "react";

const Price = (props) => {
  const { price, count, amout, plus, minus } = props;

  return (
    <>
      <div>{price}원</div>
      <button onClick={minus} style={{ opacity: count == 1 ? "0.4" : "1" }}>
        -
      </button>
      <span>{count}</span>{" "}
      <button onClick={plus} style={{ opacity: amout == count ? "0.4" : "1" }}>
        +
      </button>
    </>
  );
};
export default Price;
