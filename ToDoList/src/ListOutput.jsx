import { useState } from "react";
const ListOutput = (props) => {
  const { list, setList } = props;
  const [checked, setCheked] = useState();

  const deleteList = (index) => {
    setList(
      list.filter((item, i) => {
        return index !== i;
      })
    );
  };
  const onClickDelete = (i) => {
    deleteList(i);
  };

  const checkbox = (index) => {
    setCheked((prev) => {
      prev = !prev;
      return prev;
    });
  };
  return (
    <ul>
      {list.map((v, i) => {
        return (
          <li className={checked ? "list active" : "list"}>
            <div className="listInput">
              <input onClick={checkbox} type="checkbox" />
              <span></span>
            </div>
            <span className="listText">{v}</span>
            <button className="listbtn" onClick={(e) => onClickDelete(i)}>
              <img src="../../img/trash.png" alt="" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ListOutput;
