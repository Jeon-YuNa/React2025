const Sausage = (props) => {
  const list = ["곰곰", "천하장사", "키스틱"];

  return (
    <button style={{ color: props.color || "pink" }}>
      {props.name || "군필"}소세지
    </button>
  );
};
export default Sausage;
