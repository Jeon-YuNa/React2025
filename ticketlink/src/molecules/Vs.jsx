import BaseText from "../atoms/text/BaseText";

const Vs = (props) => {
  const { fontWeight, color } = props;
  return (
    <BaseText
      fontWeight={fontWeight}
      fontSize={"14px"}
      color={color}
      innerText={"VS"}
    />
  );
};
export default Vs;
