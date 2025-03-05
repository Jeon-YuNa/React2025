const Button = (props) => {
  const { openDay, openTime } = props;
  return (
    <button
      style={{
        backgroundColor: "#ccc",
        padding: "20px 40px",
        border: "0",
        borderRadius: "10px",
        height: "fit-content",
      }}
    >
      <p style={{ margin: "0" }}>{openDay}</p>
      <p style={{ margin: "0" }}>{openTime}</p>
    </button>
  );
};
export default Button;
