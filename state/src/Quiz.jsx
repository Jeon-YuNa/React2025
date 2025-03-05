import { useState } from "react";
import Text from "./TextComponent";
function Quiz() {
  const [num, setNum] = useState(0);
  const backgroundColor = ["pink", "skyblue", "yellow"];
  return (
    <>
      <p>
        <Text text="추천·구독"></Text> / <Text text="자동차"></Text> /
        <Text text="웹툰"></Text> / <Text text="패션뷰티"></Text>
      </p>
      <span>{num}</span>
      <button
        onClick={() => {
          setNum((prev) => prev + 2);
        }}
      >
        2씩 오르는 버튼
      </button>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: backgroundColor[num],
        }}
      ></div>
      <button
        onClick={() => {
          setNum((prev) => (prev == 2 ? (prev = 0) : prev + 1));
        }}
      >
        컬러버튼
      </button>
    </>
  );
}

export default Quiz;
