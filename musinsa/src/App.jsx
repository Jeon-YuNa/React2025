import { useState } from "react";
import Input2 from "./Input2";

function App() {
  // const [valueLengths, setValueLengths] = useState([
  //   {
  //     label: "ID",
  //     max: 20,
  //     min: 6,
  //   },
  //   {
  //     label: "PW",
  //     max: 20,
  //     min: 8,
  //   },
  // ]);
  const [valueLengths, setValueLengths] = useState("");
  const [valueLengths2, setValueLengths2] = useState("");
  const lengthCheck = (e) => {
    setValueLengths((prev) => {
      // const newArr = [...prev];
      // if (newArr[i].max >= 8 && newArr[i].min <= 8) {
      //   return console.log("black");
      // }
      console.log(e.target.value.length);
      return e.target.value.length;
    });
  };
  const lengthCheck2 = (e) => {
    setValueLengths2((prev) => {
      console.log(e.target.value.length);
      return e.target.value;
    });
  };
  const idCheck = 6 <= valueLengths && valueLengths <= 20;
  const pwCheck = 8 <= valueLengths2.length && valueLengths2.length <= 20;
  const pswIncludes = [..."!@#$%^&"].some((v) => valueLengths2.includes(v));
  return (
    <>
      <Input2
        label={"ID"}
        max={20}
        min={6}
        onCheck={lengthCheck}
        isChecked={idCheck}
      />
      <Input2
        label={"PW"}
        max={20}
        min={8}
        onCheck={lengthCheck2}
        isChecked={pwCheck && pswIncludes}
      />
      {/* {length.map((v, i) => {
        return <Input2 {...v} onCheck={() => lengthCheck(i)} />;
      })} */}
    </>
  );
}

export default App;
