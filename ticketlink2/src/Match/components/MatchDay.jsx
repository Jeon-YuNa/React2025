const Day = (props) => {
  const { day, week, time } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p style={{ fontSize: "30px" }}>{day}</p>
      <p style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: "12px" }}>{week}</span>
        <span style={{ fontSize: "12px" }}>{time}</span>
      </p>
    </div>
  );
};
export default Day;
