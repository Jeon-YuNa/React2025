import { useEffect, useState } from "react";
import { listStore } from "./store";

const User = () => {
  //   const Name = prompt("이름을 입력해 주세요.");

  //   const { updateBears } = listStore();
  //   updateBears({ Name });
  const [user, setUser] = useState("");

  useEffect(() => {
    const userName = prompt("이름을 입력해 주세요.");
    setUser(userName);
  }, []);

  return (
    <div>
      <h2>{user}님의 ToDoList</h2>
    </div>
  );
};
export default User;
