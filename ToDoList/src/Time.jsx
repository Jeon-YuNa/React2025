import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState([]);

  const updateTime = () => {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekday = weekdays[now.getDay()];

    setTime([month, day, weekday, hours, minutes, seconds]);
  };

  useEffect(() => {
    updateTime(); // 처음 렌더링 시 시간 업데이트
    const interval = setInterval(updateTime, 1000); // 1초마다 업데이트

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, []);

  const weekColor = () => {
    if (time[2] == "일") {
      return "red";
    } else if (time[2] == "토토") {
      return "blue";
    } else return "white";
  };
  const timeBigBoxCSS = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  };
  const timeMiniBoxCSS = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "20px",
    width: "100%",
  };
  return (
    <div className="box">
      <div className="box" style={timeBigBoxCSS}>
        {" "}
        <h2 style={{ textAlign: "center", fontSize: "60px" }}>
          {time[3]} : {time[4]} : {time[5]}
        </h2>
      </div>
      <div className="box" style={timeBigBoxCSS}>
        <h2 style={{ color: weekColor(), fontSize: "30px" }}>{time[2]}</h2>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div className="box" style={timeMiniBoxCSS}>
          <span style={{ marginBottom: "10px" }}>Month</span>
          <h3 style={{ fontSize: "36px" }}>{time[0]}</h3>
        </div>
        <div className="box" style={timeMiniBoxCSS}>
          <span style={{ marginBottom: "10px" }}>Day</span>
          <h3 style={{ fontSize: "36px" }}>{time[1]}</h3>
        </div>
      </div>
    </div>
  );
};
export default Time;
