import ListInput from "./ListInput";
import ListOutput from "./ListOutput";
import User from "./User";
import { useState } from "react";

const Todolist = () => {
  const [inputValue, setInputValue] = useState("");
  const [listValue, setListValue] = useState([]);

  const changeValue = (e) => {
    setInputValue(e.target.value);
  };
  const addList = () => {
    setListValue([...listValue, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <div className="box">
        <User />
        <ListInput value={inputValue} change={changeValue} button={addList} />
        <ListOutput list={listValue} setList={setListValue} />
      </div>
    </>
  );
};
export default Todolist;
