const SubmitButton = (props) => {
  const { isCheck } = props;
  return (
    <button
      style={{
        padding: "20px 60px",
        borderRadius: "5px",
        fontWeight: "700",
        color: "white",
        backgroundColor: "black",
        opacity: isCheck ? "1" : "0.2",
      }}
    >
      동의하고 본인 인증 하기
    </button>
  );
};
export default SubmitButton;
