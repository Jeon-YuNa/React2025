import BaseText from "../atoms/text/BaseText";

const Place = (props) => {
  const { place } = props;
  return (
    <BaseText
      color={"#555"}
      fontSize={"14px"}
      fontWeight={"700"}
      innerText={place}
    />
  );
};
export default Place;
