import { useBoolean, useLocalStorage } from "usehooks-ts";
import MyCard from "./MyCard";
import { bearStore } from "./store";

function App() {
  // const { value } = useBoolean(false);

  const [value, setValue, removeValue] = useLocalStorage("kim", 0);

  const { increasePopulation } = bearStore();

  return (
    <>
      {/* <div>{value ? "🍕" : "🍔"}</div> */}

      {/* <span>값:{value}</span>
      <button onClick={() => setValue((prev) => prev + 1)}>+</button> */}
      <MyCard></MyCard>
      <button onClick={increasePopulation}>곰돌이늘리기</button>
    </>
  );
}

export default App;
