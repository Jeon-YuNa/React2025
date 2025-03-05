import { useState } from "react";
import Price from "./Price";

const TotalPlace = () => {
  const [total, setTotal] = useState([
    {
      price: 10000,
      cut: 1,
      amt: 10,
    },
    {
      price: 50000,
      cut: 1,
      amt: 1,
    },
    {
      price: 20000,
      cut: 1,
      amt: 5,
    },
  ]);
  const plus = (i) => {
    setTotal((prev) => {
      const newArr = [...prev];
      newArr[i].cut =
        newArr[i].cut < newArr[i].amt ? newArr[i].cut + 1 : newArr[i].cut;
      return newArr;
    });
  };
  const minus = (i) => {
    setTotal((prev) => {
      const newArr = [...prev];
      newArr[i].cut = newArr[i].cut == 1 ? 1 : newArr[i].cut - 1;
      return newArr;
    });
  };
  const reset = () => {
    setTotal((prev) => {
      const newArr = [...prev];
      newArr.map((v) => (v.cut = 1));
      return newArr;
    });
  };
  return (
    <>
      {total.map((v, i) => {
        return (
          <Price
            price={v.price}
            count={v.cut}
            amout={v.amt}
            plus={() => plus(i)}
            minus={() => minus(i)}
          />
        );
      })}
      <div>
        총액:
        {total.map((v) => v.price * v.cut).reduce((a, c) => a + c)}
      </div>
      <button onClick={() => reset()}>reset</button>
    </>
  );
};
export default TotalPlace;
