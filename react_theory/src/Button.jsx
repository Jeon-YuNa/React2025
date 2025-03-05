const Button = () => {
  const isIce = false;

  return (
    <button
      className={isIce ? "ice" : "fire"}
      style={{ color: isIce ? "blue" : "red" }}
    >
      {isIce ? "얼음" : "불"}
    </button>
  );
};

export default Button;
