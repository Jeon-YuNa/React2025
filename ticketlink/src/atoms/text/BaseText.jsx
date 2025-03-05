const BaseText = (props) => {
  const { innerText, fontSize, color, fontWeight } = props;
  return (
    <span
      style={{
        display: "block",
        fontSize: fontSize,
        color: color,
        fontWeight: fontWeight,
      }}
    >
      {innerText}
    </span>
  );
};
export default BaseText;
