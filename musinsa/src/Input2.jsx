const Input2 = (props) => {
  const { label, min, max, onCheck, isChecked } = props;
  return (
    <>
      <div style={{ marginLeft: "30px", fontWeight: "700" }}>{label} </div>
      <input onChange={onCheck} style={{ marginLeft: "30px" }} type="text" />
      <span style={{ marginLeft: "10px", color: isChecked ? "green" : "gray" }}>
        {min}~{max}자 내외
      </span>
    </>
  );
};
export default Input2;
